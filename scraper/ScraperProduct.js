const fs = require("fs");
const { ParsePrice, TotalPrice } = require('../utils/parsePrice');
const random = (min, max) => {
  return Math.floor(Math.random() *(max - min) + min);
}


let sleep_for = async (page, min, max) => {
  let sleep_duration = random(min, max);
  // console.log("waiting for: " + sleep_duration);
  await page.waitForTimeout(sleep_duration)


}

let authenticate = async (page) => {
  try {
    const emailInput = await page.$x(`//input[@name="text"]`)
    if (emailInput.length > 0) {
      await emailInput[0].focus()
      await page.keyboard.type("m6zxonxvcqd@ezztt.com")
    }
    let nextButton = await page.$x(`//div[@role='button']//span[text()='Next']`)
    if (nextButton.length > 0) {
      await nextButton[0].click()
    }
    await sleep_for(page, 3000, 4000)
    const useNameInput = await page.$x(`//input[@name="text"]`)
    if (useNameInput.length > 0) {
      await useNameInput[0].focus()
      await page.keyboard.type("DorothyLin1757")
    }
     nextButton = await page.$x(`//div[@role='button']//span[text()='Next']`)
    if (nextButton.length > 0) {
      await nextButton[0].click()
    }

    await sleep_for(page, 3000, 4000)
    await page.keyboard.type("9j9uzppv8x")


    const  loginButton = await page.$x(`//div[@role='button']//span[text()='Log in']`)
    if (loginButton.length > 0) {
      await loginButton[0].click()
    }

  } catch (e) {
    console.log("Auth error",e);
  }
}
const site = [
  "https://twitter.com/Bestrong_Daily/status/1728690463040004173",
  "https://twitter.com/Bestrong_Daily/status/1729515157007774151",
  "https://twitter.com/Bestrong_Daily/status/1728823885410542035",
  "https://twitter.com/Bestrong_Daily/status/1729433736931090558",
  "https://twitter.com/Bestrong_Daily", "https://twitter.com/home",
  "https://twitter.com/Bestrong_Daily/status/1726771059805040696",
  "https://twitter.com/Bestrong_Daily/status/1729516239171776931"

]

let navigatorToPage = async (page) => {
  let random = site[Math.floor(Math.random() * site.length)]

  await page.goto(random, { waitUntil: 'networkidle2' });


   await page.waitForSelector('body');

  await sleep_for(page, 2000, 5000)

  return;
  // await followUser(page)
}

let followUser = async (page) => {

   const  followButton = await page.$x(`//div[@role = 'button'][@aria-label = 'Follow @Cayngaycaydem']//span[text()='Follow']`)
    if (followButton.length > 0) {
      await followButton[0].click()
    }



}

const ScraperProduct = async (browser, url) => new Promise(async (resolve, reject) => {
  let product = {}


  try {


    let page = await browser.newPage();



    await page.authenticate({
      username: "vgioblqs",
      password: "gbi4ri59xk2t1",
    });
    await page.setRequestInterception(true);


    //Block Requests
    page.on("request", (request) => {
      if (request.resourceType() === "image") {
        request.abort();
      } else {
        request.continue();
      }
    });



    // await page.setCookie(`lang=en; att=1 - 3YndDGqO5WM1iy05gwNAo5YAbijJDImcIfzpkVjO; guest_id_marketing=v1 % 3A170095587136358662; _gid=GA1.2.2023073543.1700955876; guest_id=v1 % 3A170095587136358662; twid=u % 3D1720422326477688832; guest_id_ads=v1 % 3A170095587136358662; _ga=GA1.2.1421347532.1700955876; gt=1728560364235665768; kdt=5FfkadVi64TMLO26K3NZFriSiE3bJFTmECfBr4Rn; ct0=90432ab786f6d923a8521652daccbaf993c8845db01169553939be12fc2eb0b7aa6144f79e223c014dc87b27740433febef70eaf109b39e09fb9bbf6bc1c78bba5be102c7e857d1fcde8eacf73d483f4; auth_token=eb5e6549252384797de3f053a08b75be5518a898; personalization_id="v1_x9LyzHaheLolKnA1VsqFIA=="; lang=en; d_prefs=MToxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; `)
    await page.goto(url,{waitUntil:'networkidle2'});
    console.log(">> Go to website: " + url);


    await page.waitForSelector('body');
    await authenticate(page)
    // await sleep_for(page,20000,30000)
    await sleep_for(page,10000,20000)



    for (let index = 0; index < 30000; index++) {

      console.log("Total view: ", index);
      await navigatorToPage(page)
    }



    //  const searchInput = await page.$x(`//input[@data-testid="SearchBox_Search_Input"]`)
    // if (searchInput.length > 0) {
    //   await searchInput[0].focus()
    //   await page.keyboard.type("@cayngaycaydem")
    // await sleep_for(page, 3000, 5000)


    //   let label = await page.$('#typeaheadDropdown-2 > div:nth-child(4)')
    //   await label.click()
    // }
//     await sleep_for(page, 3000, 5000)

//    const accountButton =await  page.$x(`//div[@data-testid='SideNav_AccountSwitcher_Button']`)
// if (accountButton.length > 0) {
//       await accountButton[0].click()
//     }
//     await sleep_for(page, 3000, 5000)
//     const logoutButton =await  page.$x(`//a[@data-testid='AccountSwitcher_Logout_Button']`)
// if (logoutButton.length > 0) {
//       await logoutButton[0].click()
//     }
//     await sleep_for(page, 3000, 5000)

//     const  loginButton = await page.$x(`//div[@role='button']//span[text()='Log out']`)
//     if (loginButton.length > 0) {
//       await loginButton[0].click()


//     }
//     return



    // TRNL947272|Nam10011999|vuongnam10096@gmail.com


// await page.waitForSelector('input[name=text]');

//     // await page.type('input[name=search]', 'Adenosine triphosphate');
//     await page.$eval('input[name=text]', el => el.value = 'vuongnam1009@gmail.com');

    // await page.click('input[type="submit"]');
    // await page.waitForSelector('#mw-content-text');
    // const text = await page.evaluate(() => {
    //     const anchor = document.querySelector('#mw-content-text');
    //     return anchor.textContent;
    // });
    // console.log(text);


  } catch (e) {
    console.log("Error in product", e);
    reject(e);
  }



})




module.exports = ScraperProduct