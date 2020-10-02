Feature('Google Search Feature');

Scenario('test something', (I) => {
    I.amOnPage('/');
    I.fillField("//input[@name='q']", "googol");
    I.click("//input[@name='btnK']");
    I.waitForText('People also ask',5);
    I.saveScreenshot('google-search.png');
});
