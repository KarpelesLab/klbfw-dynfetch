const puppeteer = require('puppeteer');

/**
 * Fetches a URL and returns the rendered HTML after JavaScript execution
 * @param {string} url - The URL to fetch
 * @returns {Promise<string>} - The rendered HTML
 */
async function fetchRenderedHtml(url) {
  // Launch the browser
  const browser = await puppeteer.launch();
  try {
    // Create a new page
    const page = await browser.newPage();
    
    // Navigate to URL
    await page.goto(url, {
      waitUntil: 'networkidle2', // Wait until network is idle
      timeout: 30000 // 30 seconds timeout
    });
    
    // Get the page content after JavaScript execution
    const html = await page.content();
    
    return html;
  } finally {
    // Always close the browser
    await browser.close();
  }
}

// If this file is being run directly, handle command-line arguments
if (require.main === module) {
  // Check if URL was provided as command line argument
  if (process.argv.length < 3) {
    console.error('Usage: node index.js <url>');
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
}

module.exports = {
  fetchRenderedHtml
};