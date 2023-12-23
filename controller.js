const Authenticate = require('./actions/Authenticate');
const NavigatorToPage = require('./actions/NavigatorToPage');
const SleepFor = require('./actions/sleepFor');
const {ScraperLink,ScraperProduct} = require('./scraper');

async function processArray(browser,arr) {
for (let element of arr) {
await ScraperProduct(browser, element.link)
}
}
const TwitterController = async (page, userName,password,fa,userID) => {
  const site = [
  "https://twitter.com/Cayngaycaydem/status/1732291943890288664",
  "https://twitter.com/Cayngaycaydem/status/1732292650836037813"
]
  try {
    await Authenticate(page, userName, password, fa)
    await SleepFor(page,4000,6000)
    for (let index = 0; index < 8000; index++) {
      let random = site[Math.floor(Math.random() * site.length)]
      console.log("Total view : ",userID, index);
      await NavigatorToPage(page,random,700,1200)
    }


    // let linkList = await ScraperLink(browser, url)
    // await processArray(browser,linkList)
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>> Success scraper");
    // await browser.close()
 } catch (error) {
  console.log("Error in Scraper controller", error);
  }
}


module.exports = TwitterController