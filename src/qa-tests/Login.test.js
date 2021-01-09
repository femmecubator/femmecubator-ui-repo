import puppeteer from 'puppeteer';

let browser;
let page;
const timeout = 10000;
const enableInspection = false;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: !enableInspection,
  });
  page = await browser.newPage();
}, timeout);

test('able to login', async () => {
  await page.goto(`http://${process.env.HOST}:3000/login`, {
    waitUntil: 'networkidle0',
  });

  const header = await page.$eval(
    'div[data-testid="loginFormContainer"]>h2',
    (e) => e.innerText
  );
  expect(header).toBe('Welcome back!');

  const email = process.env.QA_EMAIL;
  await page.type('input[data-testid="email"]', email);
  const emailInput = await page.$eval(
    'input[data-testid="email"]',
    (e) => e.value
  );
  expect(emailInput).toBe(email);

  const password = process.env.QA_PASSWORD;
  await page.type('input[data-testid="password"]', password);
  const passwordInput = await page.$eval(
    'input[data-testid="password"]',
    (e) => e.value
  );
  expect(passwordInput).toBe(password);

  await page.click('button[data-testid="loginButton"]');

  await page.waitForNavigation({
    waitUntil: 'networkidle0',
  });
  const dashboard = await page.$eval(
    'div[data-testid="mentors"]',
    (e) => e.innerText
  );
  expect(dashboard).toBe('Mentors');
});

afterAll(() => {
  if (!enableInspection) {
    browser.close();
  }
});
