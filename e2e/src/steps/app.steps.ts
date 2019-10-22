import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given('I am on the home page', async () => {
  await page.navigateTo();
});

When('I do nothing', () => { });

Then('I should see the title', async () => {
  expect(await page.getTitleText()).to.equal('ROMAN CONVERTER');
});

Given('I am on the home page and i see a button', async () => {
  await page.navigateTo();
});

When('I click on Click to Activate', () => {
  page.clickOnButton();
});

Then('I should see Empty Input box', async () => {
  expect(await page.getInputBox()).to.equal('');
});

When('I enter some valid input and click on Button', async () => {
  await page.clickOnButton();
  await  page.setInput(123);
  await  page.clickOnButton();
});

Then('I should see the Result', async () => {
  expect(await page.getResult()).to.equal('CXXIII');
});

When('I enter some invalid input and click on Button', async () => {
await  page.clickOnButton();
await  page.setInput(123456);
await page.clickOnButton();
});

Then('I should see the error in alert', async () => {
  expect(await page.getAlert()).to.equal('This System expects a natural number in the range of 1 to 3999');
});

Given('I am on the resuts page', async () => {
  await page.navigateTo();
  await page.clickOnButton();
  await page.setInput(123);
  await page.clickOnButton();
});

When('I Click Back after the results', async () => {
 await page.clickOnBackButton();
});




