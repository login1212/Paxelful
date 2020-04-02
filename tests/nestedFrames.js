const FramePage = require('../pages/framePage');

describe('Nested frames', function () {

    const framePage = new FramePage();
    const url = 'https://the-internet.herokuapp.com/nested_frames';

    it('', async () => {
        await browser.get(url);
        await framePage.switchToFrame(framePage.leftFrame);
        const contentLeftFrame = await helpers.getTextByElement(framePage.bodyFrame, 0);
        expect(contentLeftFrame).to.equal('LEFT');

        await framePage.switchToFrame(framePage.middleFrame);
        const contentMiddleFrame = await helpers.getTextByElement(framePage.contentMiddleFrame);
        expect(contentMiddleFrame).to.equal('MIDDLE');

        await framePage.switchToFrame(framePage.rightFrame);
        const contentRightFrame = await helpers.getTextByElement(framePage.bodyFrame, 2);
        expect(contentRightFrame).to.equal('RIGHT');

        await framePage.switchToFrame(framePage.bottomFrame);
        const contentBottomFrame = await helpers.getTextByElement(framePage.bodyFrame, 3);
        expect(contentBottomFrame).to.equal('BOTTOM');
    })();
});