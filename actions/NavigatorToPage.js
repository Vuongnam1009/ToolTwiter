const SleepFor = require('./sleepFor');

const NavigatorToPage = async (page, url, min, max) => {

  await page.goto(url, { waitUntil: 'networkidle2' });

  await SleepFor(page, min, max)

  return;
};

module.exports = NavigatorToPage;