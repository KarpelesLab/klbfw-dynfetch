// Test script for programmatic usage
const { fetchRenderedHtml } = require('./src/index');

console.log('Testing module import...');
console.log('Function available:', typeof fetchRenderedHtml === 'function');

// Uncomment to test actual functionality
// fetchRenderedHtml('https://example.com')
//   .then(html => {
//     console.log(html.substring(0, 500) + '...');
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });