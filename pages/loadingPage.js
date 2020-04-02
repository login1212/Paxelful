class LoadingPage {
    constructor() {
        this.loadingBar = by.css('#loading');
        this.resultDownload = by.css('#finish h4');
        this.buttonStart = by.buttonText('Start');
    }

    async loadingInformation() {
        const elm = await element(this.loadingBar);
        const button = await element(this.buttonStart);
        await button.click();
        await helpers.waitForNotVisible(elm);
    }
}

module.exports = LoadingPage;
