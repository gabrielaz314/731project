describe('C: Course Search Main Actions Tests', function() {

    before(browser => browser.url('http://localhost:3000/course-search'));
  
    test('Demo test subpages are shown', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.titleContains('Course Search')
        .assert.visible('a', 'View Profile')
        .assert.visible('a', 'Logout')
        .assert.visible('a', 'Fulfilled Requirements')
        .assert.visible('a', 'Transfer Credits')
        .assert.visible('a', 'Course Search')
        .assert.visible('a', 'View Saved Courses')
        .assert.visible('a', 'View Course Plans')
    });

    // test('Test Course Search page', function (browser) {
    //     browser
    //       .waitForElementVisible('body')
    //       .assert.visible('a', 'Non-related & Other Courses')
    //       .click('link text', 'Non-related & Other Courses')
    //       .assert.titleContains('Transfer Credits') //edit!!!
    //       .assert.containsText('h2', 'Completed Courses - Non-Related & Other')
    //   });

    // test('Demo test Course Search box - invalid course', function (browser) {
    //     browser
    //       .waitForElementVisible('body')
    //       .assert.titleContains('Course Search')
    //       .assert.visible('input')
    //       .setValue('input', 'CPS209')
    //   });

    after(browser => browser.end());
  });