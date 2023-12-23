
const ScraperLink = async (browser, url) => new Promise(async(resolve, reject) => {
  {
    try {
      let page =await browser.newPage();
    console.log(">> Start load product link ...");

    await page.goto(url)
    await page.waitForSelector('body')


    let isBtnDisabled = false;
    let item = [];
  while (!isBtnDisabled) {
    const productsHandles = await page.$$(
      ".grid-uniform > .grid-item"
    );

    for (const productHandle of productsHandles) {
      let link = "Null";
      try {
        link = await page.evaluate(
          (el) => el.querySelector("a").href,
          productHandle
        );
      } catch (error) { }
      item.push({ link});
    }


    await page.waitForSelector("div > div > div > ul > li:nth-child(7) > a", { visible: true });
    const is_disabled = (await page.$("div > div > div > ul > li:last-child.disabled")) !== null;
    isBtnDisabled = is_disabled;
        if (!is_disabled) {
          await Promise.all([
            page.click("div > div > div > ul > li:last-child > a"),
            page.waitForNavigation({ waitUntil: "networkidle2" }),
          ]);}
    }
    console.log(">> Success scraper links: have ",item.length," link");
    resolve(item)
  } catch (error) {
    console.log("Error in scrapeLink", error);
    reject(error);
  }
}
})


module.exports = ScraperLink