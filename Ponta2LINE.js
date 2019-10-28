const puppeteer = require('puppeteer');

(async () => {
  // Puppeteerの起動
  const browser = await puppeteer.launch({
    headless: false, //HeadLessモードでの起動有無
    slowMo: 50, // 指定のミリ秒スローモーションで実行する
  });

  // 新しい空のページを開く
  const page = await browser.newPage();

  // Promise定義
  const navigationPromise = page.waitForNavigation()

  // view portの設定
  await page.setViewport({
    width: 1200,
    height: 800,
  })
  
  // 開く先のWebサイトへ遷移
  await page.goto('https://spend.ponta.jp/Form/Product/ProductDetail.aspx?pid=LN-000001')
  
  await page.setViewport({ width: 1366, height: 803 })
  
  await page.waitForSelector('.clearFix > #detailInfo > .addToCart > #ctl00_ContentPlaceHolder1_lbCartAdd > img')
  await page.click('.clearFix > #detailInfo > .addToCart > #ctl00_ContentPlaceHolder1_lbCartAdd > img')
  
  await navigationPromise
  
  await page.waitForSelector('.btmbtn > div > .next > a > img')
  await page.click('.btmbtn > div > .next > a > img')
  
  await navigationPromise
  
  await page.waitForSelector('.rid-wrap > .rid-inner > .rid-login-box > a > img')
  await page.click('.rid-wrap > .rid-inner > .rid-login-box > a > img')
  
  await navigationPromise

  
  await page.waitForSelector('.formSimple01 #form01_text01')
  await page.click('.formSimple01 #form01_text01')
  
  await page.type('.formSimple01 #form01_text01', 'teraco@gmail.com')
  
  await page.type('.formSimple01 #form01_text02', 'kd1xwinr')

  await page.waitForSelector('.secLoginMultiColumns > .secLoginMultiColumnsInner > .secForm01 > form > .btnAction01_LV01Lg')
  await page.click('.secLoginMultiColumns > .secLoginMultiColumnsInner > .secForm01 > form > .btnAction01_LV01Lg')
  
  await navigationPromise

  await new Promise(r => setTimeout(r, 30000));

  await page.waitForSelector('table > tbody > tr > .pdb_4 > .ime_mode_dis')
  await page.click('table > tbody > tr > .pdb_4 > .ime_mode_dis')
  
  await page.waitForSelector('#centeringContents #sbmbtn')
  await page.click('#centeringContents #sbmbtn')
  
  await navigationPromise  

  await page.waitForSelector('.btmbtn > div > .next > a > img')
  await page.click('.btmbtn > div > .next > a > img')
  
  await navigationPromise
  
  await page.waitForSelector('.btmbtn > div > .next > a > img')
  await page.click('.btmbtn > div > .next > a > img')
  
  await navigationPromise
  
  await page.waitForSelector('.productList > .subcartOrder > .pdg_topB > a > img')
  await page.click('.productList > .subcartOrder > .pdg_topB > a > img')
  
  await navigationPromise
  
  await page.waitForSelector('.btmbtn > div > .next > a > img')
  await page.click('.btmbtn > div > .next > a > img')
  
  await navigationPromise
  
  await page.waitForSelector('.inner > .btmbtn > div > #ctl00_ContentPlaceHolder1_lbComplete2 > img')
  await page.click('.inner > .btmbtn > div > #ctl00_ContentPlaceHolder1_lbComplete2 > img')

  // クーポンコードのログ出力
  await new Promise(r => setTimeout(r, 10000));
  let couponcode = await page.evaluate((selector) => {
    return document.querySelector(selector).innerText;
  }, '#contents > div > div.orderComplete > div > div:nth-child(3) > div > div > div > table > tbody > tr:nth-child(2) > td > h3');
  console.log(couponcode);

  // 2週目
  let i = 0;
  while (i < 254) {
    await page.goto('https://spend.ponta.jp/Form/Product/ProductDetail.aspx?pid=LN-000001')
    
    await page.waitForSelector('.clearFix > #detailInfo > .addToCart > #ctl00_ContentPlaceHolder1_lbCartAdd > img')
    await page.click('.clearFix > #detailInfo > .addToCart > #ctl00_ContentPlaceHolder1_lbCartAdd > img')
    
    await navigationPromise
    
    await page.waitForSelector('.btmbtn > div > .next > a > img')
    await page.click('.btmbtn > div > .next > a > img')
    
    await navigationPromise
    
    await page.waitForSelector('.rid-wrap > .rid-inner > .rid-login-box > a > img')
    await page.click('.rid-wrap > .rid-inner > .rid-login-box > a > img')
    
    await navigationPromise
    
    await page.waitForSelector('.formSimple01 > tbody > tr > .pb0 > input')
    await page.click('.formSimple01 > tbody > tr > .pb0 > input')
    
    // パスワード入力
    // await page.type('.formSimple01 #form01_text02', 'kd1xwinr')
    await page.type('input[name="passwd"]', 'kd1xwinr')

    await page.waitForSelector('.gridCenter > .secForm01 > form > .btnAction01_LV01Lg > small')
    await page.click('.gridCenter > .secForm01 > form > .btnAction01_LV01Lg > small')
    
    await navigationPromise
    
    await page.waitForSelector('.btmbtn > div > .next > a > img')
    await page.click('.btmbtn > div > .next > a > img')
    
    await navigationPromise
    
    await page.waitForSelector('.btmbtn > div > .next > a > img')
    await page.click('.btmbtn > div > .next > a > img')
    
    await navigationPromise
    
    await page.waitForSelector('.inner > .btmbtn > div > #ctl00_ContentPlaceHolder1_lbComplete2 > img')
    await page.click('.inner > .btmbtn > div > #ctl00_ContentPlaceHolder1_lbComplete2 > img')
    
    await navigationPromise

    // クーポンコードのログ出力
    await new Promise(r => setTimeout(r, 5000));
    let couponcode = await page.evaluate((selector) => {
      return document.querySelector(selector).innerText;
    }, '#contents > div > div.orderComplete > div > div:nth-child(3) > div > div > div > table > tbody > tr:nth-child(2) > td > h3');
    console.log(couponcode)
    console.log(i++);
  }

})();

// const puppeteer = require('puppeteer');
// (async () => {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()
  
//   const navigationPromise = page.waitForNavigation()
  
//   await page.goto('https://points.line.me/pointcode/#/pointcode/form')
  
//   await page.setViewport({ width: 1366, height: 803 })
  
//   await navigationPromise
  
//   await page.waitForSelector('#mainView #pincode')
//   await page.click('#mainView #pincode')
  
//   await page.waitForSelector('#mainView #pincode')
//   await page.click('#mainView #pincode')
  
//   await page.waitForSelector('#mainView > div > form > .MdBtn01 > button')
//   await page.click('#mainView > div > form > .MdBtn01 > button')
  
//   await navigationPromise
  
//   await page.waitForSelector('.arLoginWrapInner > .MdMN01LoginForm > form > .mdMN01Btn > .MdBtn03Login')
//   await page.click('.arLoginWrapInner > .MdMN01LoginForm > form > .mdMN01Btn > .MdBtn03Login')
  
//   await navigationPromise
  
//   await browser.close()
// })()