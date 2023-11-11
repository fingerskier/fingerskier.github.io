import React, { useState, useEffect } from 'react'
import {marked} from 'marked'


export default function MarkdownRenderer({ markdownFile }) {
  const [content, setContent] = useState('');
  
  
  useEffect(() => {
    fetch(markdownFile)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(text => setContent(marked(text)))
      .catch(error => console.error('Error fetching markdown:', error));
  }, [markdownFile]);
  
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}