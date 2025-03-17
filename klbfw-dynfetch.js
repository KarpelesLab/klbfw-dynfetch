#!/usr/bin/env node

const { fetchRenderedHtml } = require('./src/index');

// Check if URL was provided as command line argument
if (process.argv.length < 3) {
  console.error('Usage: npx @karpeleslab/klbfw-dynfetch <url>');
  process.exit(1);
}

const url = process.argv[2];

// Execute the function and output the HTML
fetchRenderedHtml(url)
  .then(html => {
    console.log(html);
  })
  .catch(error => {
    console.error('Error:', error);
    process.exit(1);
  });