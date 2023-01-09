require('dotenv').config()
const path = require('path');
const SitemapGenerator = require('advanced-sitemap-generator');
const fs = require('fs');

const wdio = require('./wdio.conf.js');
const basePath = wdio.config.baseUrl;

// create generator
const generator = SitemapGenerator(basePath, {
  stripQuerystring: true,
  ignoreHreflang: true,
  filepath: path.join(process.cwd(), 'sitemap.xml'),
  excludeFileTypes: ['gif', 'jpg', 'jpeg', 'png', 'ico', 'bmp', 'ogg', 'webp', 'mp4', 'webm', 'mp3', 'ttf',
    'woff', 'json', 'rss', 'atom', 'gz', 'zip', 'rar', '7z', 'css', 'js', 'gzip', 'exe', 'svg',
    'xml', 'pdf'],
});

const pages = [];

generator.on('add', (page) => {
  pages.push(page.url.split(basePath)[1]);
});

// register event listeners
generator.on('done', () => {
  pages.push('/404');
  const data = JSON.stringify(pages);
  fs.writeFileSync('sitemap.json', data);
});

// start the crawler
generator.start();
