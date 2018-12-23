const puppeteer = require('puppeteer');

(async () => {
  // Puppeteerの起動
  const browser = await puppeteer.launch({
    headless: true, //HeadLessモードでの起動有無
    slowMo: 50, // 指定のミリ秒スローモーションで実行する
  });

  // 新しい空のページを開く
  const page = await browser.newPage();

  // view portの設定
  await page.setViewport({
    width: 1200,
    height: 800,
  })

  // 開く先のWebサイトへ遷移
  await page.goto('https://prius.cc/itya/20151118-servername')

  await page.waitForSelector('.post-title')

  let data = await page.evaluate((selector) => {
    return document.querySelector(selector).innerText;
  }, '.post-title')

  console.log(data)

  await browser.close();

})();
