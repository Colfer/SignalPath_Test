describe('twiiter_login_test.spec.js', function () {
    var fakeTwitterUserName = 'faketwitter@mail.com';
    var fakePassword = 'password';
    var realTwitterUserName = 'realtwitter@mail.com';
    var realPassword = 'password';

    //This test will run
    describe('Verify that the login will display an error when no account exists', function () {
        beforeAll(function (done) {
            browser.get('https://www.twitter.com').then(function () {
                done();
            })
        });
        it('Click the login button; popup should display', function (done) {
            element(by.css('a.js-login.Button.StreamsLogin')).click().then(function () {
                return browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css('input.js-signin-email'))));
            }).then(function () {
                return element(by.css('input.js-signin-email')).isDisplayed();
            }).then(function (isDisplayed) {
                expect(isDisplayed).toBe(true);
                done();
            })
        });

        it('Enter a nonexistant account into the inputs, and click login; Should display error message', function (done) {
            element(by.css('input.js-signin-email')).sendKeys(fakeTwitterUserName).then(function () {
                return element(by.css('input[name="session[password]"]')).sendKeys(fakePassword);
            }).then(function () {
                return element(by.css('input[value="Log in"].js-submit')).click();
            }).then(function () {
                return element(by.css('div.alert-messages div.message div.message-inside span.message-text')).getText();
            }).then(function (alertText) {
                expect(alertText).toBe('The email and password you entered did not match our records. Please double-check and try again.');
                expect(browser.getCurrentUrl()).toContain('login/error');
                done();
            })
        })
    });

    //This test will not run
    xdescribe('Verify that you can login successfully', function () {
        beforeAll(function (done) {
            browser.get('https://www.twitter.com').then(function () {
                done();
            })
        });

        xit('Click login button; Should display a popup', function (done) {
            element(by.css('a.js-login.Button.StreamsLogin')).click().then(function () {
                return browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css('input.js-signin-email'))));
            }).then(function () {
                return element(by.css('input.js-signin-email')).isDisplayed();
            }).then(function (isDisplayed) {
                expect(isDisplayed).toBe(true);
                done();
            });
        });

        xit('Fill out the email and password fields, and click the login button; Should display the correct fields', function (done) {
            element(by.css('input.js-signin-email')).sendKeys(realTwitterUserName).then(function () {
                return element(by.css('input[name="session[password]"]')).sendKeys(realPassword);
            }).then(function () {
                return element(by.css('input[value="Log in"].js-submit')).click();
            }).then(function () {
                return element(by.css('div#tweet-box-home-timeline')).click();
            }).then(function (isDisplayed){
                expect(isDisplayed).toBe(true);
                done();
            });
        });
    })
});