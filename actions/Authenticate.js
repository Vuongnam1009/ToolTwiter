const SleepFor = require('./sleepFor');
const speakeasy = require('speakeasy');


const Authenticate = async (page,username,password,fa) => {
  try {
    await page.goto('https://twitter.com/login', { waitUntil: 'load' });
     await SleepFor(page, 3000, 4000)
    console.log(">> Login with user name: " + username);
    const emailInput = await page.$x(`//input[@name="text"]`)
    if (emailInput.length > 0) {
      await emailInput[0].focus()
      await page.keyboard.type(username)
    }
    let nextButton = await page.$x(`//div[@role='button']//span[text()='Next']`)
    if (nextButton.length > 0) {
      await nextButton[0].click()
    }


    await SleepFor(page, 3000, 4000)
    await page.keyboard.type(password)


    const  loginButton = await page.$x(`//div[@role='button']//span[text()='Log in']`)
    if (loginButton.length > 0) {
      await loginButton[0].click()
    }
    await SleepFor(page, 3000, 4000)


     const verifyCodeExist = await page.$x(`//h1[@role='heading']//span[text()='Enter your verification code']`)
    if (verifyCodeExist.length > 0) {
      console.log("<<< Verify 2fa");
      var token = await speakeasy.totp({
        secret: fa,
        encoding: 'base32'
      });
      await page.keyboard.type(token)
      await SleepFor(page, 1000, 2000)
       let nextButton = await page.$x(`//div[@role='button']//span[text()='Next']`)
    if (nextButton.length > 0) {
      await nextButton[0].click()
    }

    }

  } catch (e) {
    console.log("Auth error",e);
  }
}

module.exports = Authenticate