# Instruction
1. `npm i`
2. `cp .env.example .env`
3. Fill `BASE_URL` and `PREV_URL` in .env (it should be old version of a website)
4. `npm run sitemap`
5. `npm run generate` to generate screenshots from previous version
6. update dependencef of browser if errors exist
8. `npm run wdio && npm run wdio:mobile`
9. in `tmp/diff` folder will be result

Note: you can change `sitemap.json` file to add/remove links, for examle you can add /404 page