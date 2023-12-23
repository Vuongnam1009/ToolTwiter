const fs = require("fs");
const BrowserInit = require('./browser');
const TwitterController = require('./controller');

(async () => {

const userPath = './user.csv';

// Đọc nội dung của file notepad
fs.readFile(userPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error when read file: ', err);
    return;
  }
  let users = data.split('\n');
  users.forEach(async (user, index) => {
    if (index !== 0) {
      let arr = user.split(',')
      let userName = arr[0]
      let password = arr[1]
      let fa = arr[2]
      let proxyProfile = arr[3]
      const proxyData = proxyProfile.split(':');
      const ip = proxyData[0]
      const port = proxyData[1]
      const userNameProxy = proxyData[2]
      const passwordProxy = proxyData[3]
      console.log(userNameProxy,passwordProxy);
      let browser = await BrowserInit(ip, port, index)
      const pages = await browser.pages();
      let page = pages[0];
      await page.authenticate({
        username: userNameProxy,
        password: passwordProxy,
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
      TwitterController(page,userName,password,fa,index)

    }
});
  console.log('Nội dung của file:', data.length);
});
})();


