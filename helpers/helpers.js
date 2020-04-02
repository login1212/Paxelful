const helpers = {
    async waitForVisible(element) {
        const EC = protractor.ExpectedConditions;
        return browser.driver.wait(EC.visibilityOf(element), 10000);
    },

    async waitForNotVisible(element) {
        const EC = protractor.ExpectedConditions;
        return browser.driver.wait(EC.invisibilityOf(element));
    },

    async getTextByElement(elm, number = 0) {
        const element = await element.all(elm).get(number);
        return element.getText();
    },

    async isPresentByElement(elm, number = 0) {
      const element = await element.all(elm).get(number);
      return await element.isPresent();
    }
};

module.exports = helpers;
