const fs = require('fs');
const rawdata = fs.readFileSync('./sitemap.json');
const pages = JSON.parse(rawdata);

const wdio = require('./../../wdio.conf.js');
const basePath = wdio.config.baseUrl;
// you must generate ../sitemap.json before by runing `node sitemap.js`

describe('Screenshot testing', function () {
  pages.forEach(async (page) => {
    await it(page, async function () {
      let title = page.replace(basePath, '');
      if (title === '') {
        title = 'home';
      }
      await browser.url(page);
      await expect(await browser.checkFullPageScreen(title)).toEqual(0);
    });
  });
});
