
* Copy tests/example.spec.js and rename it to tests/{project}.spec.js
* Set up `pages`, `domain`, `project`, `cssFilePath` variables in the new file from step 1
* To generate pages list you can use `php please static:warm` command in a Statamic project folder
* `npx playwright test {project}.spec.js --update-snapshots` or add this command to `package.json` -> scripts object
* change domain name to local domain name in tests/{project}.spec.js
* `npx playwright test {project}.spec.js`

Note: ./styles/testing.css file helps to hide dynamic elements or disable a header scrolling


to get a list of all urls you can open {project-domain}/sitemap.xml and store it locally.
Then find and replace via VCode
```
    <url>
        <loc>(.*)</loc>
        <lastmod>.*</lastmod>
        <changefreq>.*</changefreq>
        <priority>.*</priority>
    </url>
```
to 
```
$1
```