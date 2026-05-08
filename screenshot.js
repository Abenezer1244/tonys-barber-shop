const { chromium } = require('playwright');
const path = require('path');

const OUT = path.join(__dirname, '.screenshots');
const BASE = 'https://tonykirk.vercel.app';
const UA_MOBILE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

async function waitForApp(page) {
  await page.waitForFunction(() => {
    const root = document.getElementById('root');
    return root && root.children.length > 0;
  }, { timeout: 30000 });
  await page.waitForTimeout(1000);
}

async function shoot(page, label, vpName) {
  const dest = path.join(OUT, `${vpName}-${label}.png`);
  await page.screenshot({ path: dest, fullPage: false });
  console.log('✓', label, '@', vpName);
}

(async () => {
  const browser = await chromium.launch({ headless: true });

  for (const vp of [
    { name: 'mobile-375', width: 375, height: 812, mobile: true },
    { name: 'tablet-768', width: 768, height: 1024, mobile: false },
  ]) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
      isMobile: vp.mobile,
      hasTouch: vp.mobile,
      userAgent: vp.mobile ? UA_MOBILE : undefined,
    });
    const page = await ctx.newPage();

    // HOME top
    await page.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });
    await waitForApp(page);
    await shoot(page, 'home-top', vp.name);

    await page.evaluate(() => window.scrollTo(0, 750));
    await page.waitForTimeout(400);
    await shoot(page, 'home-valuebar', vp.name);

    await page.evaluate(() => window.scrollTo(0, 1600));
    await page.waitForTimeout(400);
    await shoot(page, 'home-services', vp.name);

    await page.evaluate(() => window.scrollTo(0, 999999));
    await page.waitForTimeout(400);
    await shoot(page, 'home-footer', vp.name);

    // MOBILE MENU
    await page.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });
    await waitForApp(page);
    try {
      await page.locator('.hamburger').click({ timeout: 5000 });
      await page.waitForTimeout(600);
      await shoot(page, 'mobile-menu', vp.name);

      // Navigate to Services
      await page.locator('.mobile-nav-link', { hasText: 'Services' }).click({ timeout: 5000 });
      await waitForApp(page);
      await shoot(page, 'services-top', vp.name);
      await page.evaluate(() => window.scrollTo(0, 500));
      await page.waitForTimeout(400);
      await shoot(page, 'services-list', vp.name);
    } catch(e) {
      // Desktop: click nav link directly
      try {
        await page.locator('.nav-link', { hasText: 'Services' }).click({ timeout: 5000 });
        await waitForApp(page);
        await shoot(page, 'services-top', vp.name);
      } catch(e2) { console.log('services skip:', e2.message); }
    }

    // BOOK page
    await page.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });
    await waitForApp(page);
    try {
      if (vp.mobile) {
        await page.locator('.book-bar button').click({ timeout: 5000 });
      } else {
        await page.locator('button:has-text("Book Now")').first().click({ timeout: 5000 });
      }
      await page.waitForTimeout(1000);
      await shoot(page, 'book-step1', vp.name);

      // Pick a service to advance
      await page.locator('button:has-text("Classic Cut")').click({ timeout: 5000 });
      await page.waitForTimeout(800);
      await shoot(page, 'book-step2', vp.name);
    } catch(e) { console.log('book skip:', e.message); }

    // FAQ page
    await page.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });
    await waitForApp(page);
    try {
      if (vp.mobile) {
        await page.locator('.hamburger').click({ timeout: 5000 });
        await page.waitForTimeout(500);
        await page.locator('.mobile-nav-link', { hasText: 'FAQ' }).click({ timeout: 5000 });
      } else {
        await page.locator('.nav-link', { hasText: 'FAQ' }).click({ timeout: 5000 });
      }
      await waitForApp(page);
      await shoot(page, 'faq', vp.name);
    } catch(e) { console.log('faq skip:', e.message); }

    await ctx.close();
  }

  await browser.close();
  console.log('\nAll screenshots done.');
})().catch(e => { console.error(e.message); process.exit(1); });
