#!/usr/bin/env node
// Verify cv.json matches CV.md (source of truth).
// Parses CV.md experience + education sections, diffs against cv.json.
// Exit 0 on match, 1 on mismatch.

import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const md = readFileSync(join(root, 'CV.md'), 'utf8')
const json = JSON.parse(readFileSync(join(root, 'cv.json'), 'utf8'))

const normDash = s => s.replace(/[\u2010-\u2015]/g, '-').replace(/\s*-\s*/g, ' - ').trim()
const normCompany = s => s.replace(/\s*[\u2192\/]\s*/g, ' / ').trim()
const normLoc = s => (s || '').trim()

function parseExperienceFromMd(md) {
  const expStart = md.indexOf('## PROFESSIONAL EXPERIENCE')
  const eduStart = md.indexOf('## EDUCATION')
  const block = md.slice(expStart, eduStart)
  const lines = block.split(/\r?\n/)
  const entries = []
  for (let i = 0; i < lines.length; i++) {
    const titleMatch = lines[i].match(/^###\s+(.+?)\s*$/)
    if (!titleMatch) continue
    const title = titleMatch[1].trim()
    // Next non-empty line should be **Company** \t dates \t location?
    let j = i + 1
    while (j < lines.length && lines[j].trim() === '') j++
    const meta = lines[j] || ''
    const metaMatch = meta.match(/^\*\*(.+?)\*\*\s*(.*)$/)
    if (!metaMatch) continue
    const company = metaMatch[1].trim()
    const rest = metaMatch[2].split(/\t+/).map(s => s.trim()).filter(Boolean)
    const dates = rest[0] || ''
    const location = rest[1] || ''
    entries.push({ title, company, dates, location })
    // Stacked additional rows for same company (e.g. ACS Online 1998-2001 under 2001-2003)
    for (let k = j + 1; k < lines.length; k++) {
      const stacked = lines[k].match(/^([A-Za-z][A-Za-z0-9 &.\-\/]+?)\s+(\d{4}\s*[\u2010-\u2015\-]\s*(?:\d{4}|Present))(?:\s+(.+))?$/)
      if (!stacked) break
      if (stacked[1].trim() !== company) break
      entries.push({
        title,
        company,
        dates: stacked[2].trim(),
        location: (stacked[3] || '').trim(),
      })
    }
  }
  return entries
}

function parseEducationFromMd(md) {
  const eduStart = md.indexOf('## EDUCATION')
  const block = md.slice(eduStart)
  const lines = block.split(/\r?\n/)
  const entries = []
  for (let i = 0; i < lines.length; i++) {
    const instMatch = lines[i].match(/^\*\*(.+?)\*\*/)
    if (!instMatch) continue
    const institution = instMatch[1].replace(/\s*\(.*?\)\s*$/, '').trim()
    // Next non-empty line: degree: ..., year - year
    let j = i + 1
    while (j < lines.length && lines[j].trim() === '') j++
    const degreeLine = (lines[j] || '').trim()
    const dm = degreeLine.match(/^(.+?),\s*(\d{4})\s*[\u2010-\u2015\-]\s*(\d{4})\s*$/)
    if (!dm) continue
    entries.push({
      institution,
      degree: dm[1].trim(),
      startYear: Number(dm[2]),
      endYear: Number(dm[3]),
    })
  }
  return entries
}

const mdExp = parseExperienceFromMd(md)
const mdEdu = parseEducationFromMd(md)

const issues = []

// Experience parity: JSON must have an entry for every unique MD (company+title+dates) tuple.
// MD may have multiple rows for same company (ACS Online x2). JSON collapses to one entry.
// Strategy: group MD entries by company; verify each company has a JSON entry with matching title + date span.
const mdByCompany = new Map()
for (const e of mdExp) {
  const key = normCompany(e.company)
  if (!mdByCompany.has(key)) mdByCompany.set(key, [])
  mdByCompany.get(key).push(e)
}

for (const [key, rows] of mdByCompany) {
  const jsonEntry = json.experience.find(x => normCompany(x.company) === key)
  if (!jsonEntry) {
    issues.push(`MISSING in cv.json: experience for "${rows[0].company}"`)
    continue
  }
  // Title check: at least one MD row's title should match
  const mdTitles = rows.map(r => r.title)
  if (!mdTitles.includes(jsonEntry.title)) {
    issues.push(`TITLE mismatch for ${key}: CV.md has [${mdTitles.join(', ')}], cv.json has "${jsonEntry.title}"`)
  }
  // Date span: collapse multi-row MD entries to earliest start - latest end
  const allDates = rows.map(r => normDash(r.dates)).join(' ')
  const yearTokens = [...allDates.matchAll(/\d{4}|Present/gi)].map(m => m[0])
  if (yearTokens.length >= 2) {
    const numericYears = yearTokens.filter(y => /^\d{4}$/.test(y)).map(Number)
    const hasPresent = yearTokens.some(y => /present/i.test(y))
    const start = Math.min(...numericYears)
    const end = hasPresent ? 'Present' : Math.max(...numericYears)
    const expected = `${start} - ${end}`
    const jsonDates = normDash(jsonEntry.dates)
    if (jsonDates !== expected) {
      issues.push(`DATES mismatch for ${key}: CV.md spans "${expected}", cv.json has "${jsonDates}"`)
    }
  }
  // Location check (only if MD has one and JSON has one — warn if they diverge)
  const mdLoc = rows.map(r => normLoc(r.location)).filter(Boolean)[0]
  const jsonLoc = normLoc(jsonEntry.location)
  if (mdLoc && jsonLoc && mdLoc !== jsonLoc) {
    issues.push(`LOCATION mismatch for ${key}: CV.md "${mdLoc}", cv.json "${jsonLoc}"`)
  }
}

// JSON entries not present in MD
for (const je of json.experience) {
  const key = normCompany(je.company)
  if (!mdByCompany.has(key)) {
    issues.push(`EXTRA in cv.json: "${je.company}" not in CV.md`)
  }
}

// Education parity
for (const me of mdEdu) {
  const jsonEdu = json.education.find(e => e.institution.trim() === me.institution.trim())
  if (!jsonEdu) {
    issues.push(`MISSING in cv.json: education at "${me.institution}"`)
    continue
  }
  if (Number(jsonEdu.year) !== me.endYear) {
    issues.push(`EDU year mismatch for ${me.institution}: CV.md ends ${me.endYear}, cv.json year ${jsonEdu.year}`)
  }
}
for (const je of json.education) {
  if (!mdEdu.find(m => m.institution.trim() === je.institution.trim())) {
    issues.push(`EXTRA in cv.json: education at "${je.institution}" not in CV.md`)
  }
}

// Name parity
const mdName = md.split(/\r?\n/)[0].replace(/^#\s*/, '').trim()
if (mdName !== json.name) {
  issues.push(`NAME mismatch: CV.md "${mdName}", cv.json "${json.name}"`)
}

console.log(`CV.md experience entries: ${mdExp.length} (${mdByCompany.size} unique companies)`)
console.log(`cv.json experience entries: ${json.experience.length}`)
console.log(`CV.md education entries: ${mdEdu.length}`)
console.log(`cv.json education entries: ${json.education.length}`)

if (issues.length === 0) {
  console.log('\nOK — cv.json is in parity with CV.md.')
  process.exit(0)
} else {
  console.log(`\n${issues.length} parity issue(s):`)
  for (const msg of issues) console.log(`  - ${msg}`)
  process.exit(1)
}
