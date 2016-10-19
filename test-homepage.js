var assert = require('assert');
    describe('webdriver.io page', function() {
        it('should have the right title', function () {
            this.timeout(99999999);
            browser.url('/');
            var title = browser.getTitle();
            assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');

            browser.debug();
        });

        describe('Api Page', function(){
            it('should have a link to it from the homepage', function () {
                browser.url('/');
                var hasApiLink = browser.isExisting('=API');
                assert(hasApiLink);
            });
            it('should take you to the API page', function () {
                browser.url('/');
                browser.click('=API');

                var title = browser.getTitle();
                assert.equal(title,'WebdriverIO - API Docs');
                //browser.pause(2000);
            });

            it('should filter search results', function () {
                browser.url('/api.html');

                browser.setValue('input[name="search"]','debug');

                browser.saveScreenshot('api-with-result.png');
                //browser.pause(2000);
            });            
        });
}); 