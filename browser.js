const puppeteer = require("puppeteer");


const BrowserInit = async(ip,port,tmp) => {
  let browser


  try {
    browser = await puppeteer.launch({
      headless: false,
      // slowMo: 250,
      defaultViewport: false,
    userDataDir: `./dataDir/tmp${tmp}`,
    args: [
      `--proxy-server=${ip}:${port}`,
]
  });
  } catch (e) {
    console.log("Error on browser",e);
  }
  return browser
}



module.exports = BrowserInit