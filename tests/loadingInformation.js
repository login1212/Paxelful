const LoadingPage = require('../pages/loadingPage');

describe('Dynamic loading', function () {
    const loadingPage = new LoadingPage();
    const url = 'https://the-internet.herokuapp.com/dynamic_loading/';

    it('loading', async () => {
        await browser.get(url + '1');
        await loadingPage.loadingInformation();

        const resultLoading = await helpers.getTextByElement(loadingPage.resultDownload);
        expect(resultLoading).toEqual('Hello World!');
    })();

    it('', async () => {
        await browser.get(url + '2');
        await loadingPage.loadingInformation();

        const statusResultLoading = await helpers.isPresentByElement(loadingPage.resultDownload);
        expect(statusResultLoading).to.equal(true);

        const resultLoading = await helpers.getTextByElement(loadingPage.resultDownload);
        expect(resultLoading).to.equal('Hello World!');
    })();
});