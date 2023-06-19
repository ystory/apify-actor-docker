const { launchPlaywright } = require('crawlee');

const testPageLoading = async (browser) => {
    const page = await browser.newPage();
    await page.goto('http://www.example.com');
    const pageTitle = await page.title();
    if (pageTitle !== 'Example Domain') {
        throw new Error(`Playwright+Chromium test failed - returned title "${pageTitle}"" !== "Example Domain"`);
    }
};

const testChromium = async (launchOptions) => {
    const launchContext = {
        launcher: require('playwright').chromium,
        launchOptions
    };

    console.log(`Testing Playwright with Chromium`, launchContext);

    const browser = await launchPlaywright(launchContext);

    await testPageLoading(browser);
    await browser.close();
};

module.exports = testChromium;
