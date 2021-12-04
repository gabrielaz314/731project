describe('Login Demo', function() {

    before(browser => browser.url('http://localhost:3000/'));
  
    test('Demo test main page', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.titleContains('Home')
        .assert.visible('a')
        .click('link text', 'App Landing Page')
        .assert.titleContains('View All Courses')
        .end();
        //.expect.elements('a').count.to.equal(2)
    });
  
    after(browser => browser.end());
  });