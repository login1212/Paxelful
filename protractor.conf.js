exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        "browserName": "chrome",
        "chromeOptions": {
            "args": [
                //"--disable-gpu",
                "--window-size=1920х1080",
                '--start-maximized'
            ],
        }
    },
    framework: 'mocha',
    specs: ['downloadPage.js'],

    onPrepare : function () {
        let chai;

        chai = require('chai');
        global.helpers = require('./helpers/helpers');
        global.expect = chai.expect;
    }
};