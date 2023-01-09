# Instruction
1. `npm i`
2. `cp .env.example .env`
3. Fill `BASE_URL=` in .env (it should be old version of a website)
4. `npm run sitemap`
5. `npm run wdio`
6. update dependencef of browser if errors exist
7. Change BASE_URL= to new version website url
8. `npm run wdio`
9. in `tmp/diff` folder will be result
