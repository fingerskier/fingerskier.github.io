# fingerskier.github.io

[fingerskier blog](https://fingerskier.github.io)

## Playable Resume

The `/app` directory holds a small React application that renders a side‑scrolling resume.
Install dependencies and start the dev server with:

```bash
cd app
npm install
npm run dev
```

Use the left and right arrow keys to navigate between sections. Update `app/src/resume.json` with your own information to populate the game.

## CV Play

A simple Impress.js viewer lives in the `/play` directory. It loads `cv.json` and turns it into a series of slides with a small scoring mechanic. Open `play/index.html` in a browser to try it out. Edit `cv.txt` and run `node scripts/convert-cv.js` to regenerate `cv.json`.
