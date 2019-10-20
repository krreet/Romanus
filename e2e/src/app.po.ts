import { browser, by, element , $ , protractor , ProtractorBrowser } from 'protractor';

/*******************************************************
 //uncomment for slow mde e2e
var origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
  var args = arguments;

  // queue 100ms wait
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(100);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};
***********************************************************/

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root header h1')).getText() as Promise<string>;
  }

  clickOnButton() {
    return element(by.id('main-btn')).click() as Promise<void>;
  }

  clickOnBackButton() {
  return  element(by.id('back-btn')).click() as Promise<void>;
  }

  getInputBox() {

    return $('form input').getAttribute('value') as Promise<string>;
  }
  getResult() {

    return  element(by.id('result')).getText() as Promise<string>;
  }
  getAlert() {

    return element(by.id('swal2-title')).getText() as Promise<string>;
  }

  setInput(val) {
    const input = element(by.css('form input'));
    return input.sendKeys(val) as Promise<void>;
  }
}
