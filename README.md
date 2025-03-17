# @karpeleslab/klbfw-dynfetch

A utility for fetching dynamically rendered HTML content from websites using Puppeteer.

## Usage with npx

You can run this tool directly without installation using npx:

```bash
npx @karpeleslab/klbfw-dynfetch <url>
```

Example:
```bash
npx @karpeleslab/klbfw-dynfetch https://example.com
```

This will output the fully rendered HTML after JavaScript execution.

## Installation

### Global Installation

```bash
npm install -g @karpeleslab/klbfw-dynfetch
```

Then you can use it as:

```bash
klbfw-dynfetch <url>
```

### Local Installation

```bash
npm install @karpeleslab/klbfw-dynfetch
```

## Programmatic Usage

You can also use this package programmatically in your code:

```javascript
const { fetchRenderedHtml } = require('@karpeleslab/klbfw-dynfetch');

fetchRenderedHtml('https://example.com')
  .then(html => {
    console.log(html);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

## Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/karpeleslab/klbfw-dynfetch.git
cd klbfw-dynfetch
npm install
```

Run locally:

```bash
npm start <url>
```

or 

```bash
node src/index.js <url>
```