// @ts-check
const { test, expect } = require('@playwright/test');

const pages = [
  '/',
];

const domain = process.env.PREV_URL;
const project = process.env.PROJECT_NAME;
const cssFilePath = './styles/testing.css'

test.describe((project || 'Pages'), () => {
  for(const link of pages) {
    test(link, async ({ page }) => {
      await page.goto(`${domain}${link}`);
    
      await page.waitForLoadState('domcontentloaded')
      await page.keyboard.down('End')
      await page.waitForTimeout(300)
    
      // await page.screenshot({
      //   fullPage: true,
      //   animations: 'disabled',
      //   maskColor: '#d55348'
      // });
    
      await expect(page).toHaveScreenshot({
        maxDiffPixelRatio: 0.2,
        fullPage: true,
        stylePath: cssFilePath,
        // animations: 'disabled',
      });
    });
  }
})