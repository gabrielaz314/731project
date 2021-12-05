describe('A: Main Page Elements Tests', function() {

    before(browser => browser.url('http://localhost:3000/'));
  
    test('Demo test login page', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.titleContains('Login Page')
        .assert.visible('input')
        .setValue('input', 'test1')
        .assert.visible('a')
        .click('link text', 'Sign in')
        .assert.titleContains('View All Courses')
        //.expect.elements('a').count.to.equal(2)
    });

    test('Test main page elements', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.titleContains('View All Courses')
        .assert.visible('h2')
        .assert.containsText('h2', 'Current Course Calendar')
        .assert.visible('a', 'Fulfilled Requirements')
        .assert.visible('a', 'Transfer Credits')
        .assert.visible('a', 'Non-related & Other Courses')
    });

    test('Test subpage links are visible', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.visible('a', 'View Profile')
        .assert.visible('a', 'Logout')
        .assert.visible('a', 'Fulfilled Requirements')
        .assert.visible('a', 'Transfer Credits')
        .assert.visible('a', 'Course Search')
        .assert.visible('a', 'View Saved Courses')
        .assert.visible('a', 'View Course Plans')
    });
  
    test('Test Fulfilled Requirements page', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.visible('a', 'Fulfilled Requirements')
        .click('link text', 'Fulfilled Requirements')
        .assert.titleContains('Fulfilled Requirements')
        .assert.containsText('h2', 'Completed Courses - Required')
    });

    test('Test Transfer Credits page', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.visible('a', 'Transfer Credits')
        .click('link text', 'Transfer Credits')
        .assert.titleContains('Transfer Credits')
        .assert.containsText('h2', 'Completed Courses - Transfer Credits')
    });

    test('Test Non-Related Completed Courses page', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.visible('a', 'Non-related & Other Courses')
        .click('link text', 'Non-related & Other Courses')
        .assert.titleContains('Transfer Credits') //edit!!!
        .assert.containsText('h2', 'Completed Courses - Non-Related & Other')
    });

    after(browser => browser.end());
  });