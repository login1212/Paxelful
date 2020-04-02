class FramePage {
    constructor() {
        this.leftFrame = by.name('frame-left');
        this.middleFrame = by.name('frame-middle');
        this.rightFrame = by.name('frame-right');
        this.bottomFrame = by.name('frame-bottom');
        this.contentMiddleFrame = by.css('#content');
        this.bodyFrame = by.css('body');
    }

    async switchToFrame(frame) {
        const elmFrame = await element(frame);
        await browser.switchTo().frame(elmFrame.getWebElement());
    }
}

module.exports = FramePage;
