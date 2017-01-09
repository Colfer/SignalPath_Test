var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine2',
    specs: '*.spec.js',

    capabilities: {
        browserName: 'chrome'
    },

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();

        jasmine.getEnv().addReporter(new SpecReporter({}))
    }
};