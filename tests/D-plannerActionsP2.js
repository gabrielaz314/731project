describe('D: Calendar Course Planner tool Tests', function() {

    before(browser => browser.url('http://localhost:3000/view-course-plan'));
  
    test('Demo test subpages are shown', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.titleContains('View Courses Plan')
        .assert.visible('a', 'View Profile')
        .assert.visible('a', 'Logout')
        .assert.visible('a', 'Fulfilled Requirements')
        .assert.visible('a', 'Transfer Credits')
        .assert.visible('a', 'Course Search')
        .assert.visible('a', 'View Saved Courses')
        .assert.visible('a', 'View Course Plans')
    });

    test('Demo test Course Search page', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.visible('a', 'Course Search')
        .click('link text', 'Course Search')
        .assert.titleContains('Course Search')
        .assert.visible('input')
        .setValue('input', 'CPS209')
    });

    test('Demo test saving a course', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.titleContains('Course Search')
        .assert.visible('a', 'Save')
        .click('link text', 'Save')
    });

    test('Test Saved Courses page', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.visible('a', 'View Saved Courses')
        .click('link text', 'View Saved Courses')
        .assert.titleContains('View Saved Courses')
        .assert.containsText('h2', 'View Saved Courses')
    });
    
    test('Test Adding Course to Planner', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.containsText('h2', 'View Saved Courses')
        .assert.visible('a', 'Save') //edit?
        .click('link text', 'Save')
    });

    // test('Test View Course Plan page', function (browser) {
    //   browser
    //     .waitForElementVisible('body')
    //     .assert.visible('a', 'View Course Plans')
    //     .click('link text', 'View Course Plans')
    //     .assert.titleContains('View Courses Plan')
    //     .assert.containsText('h2', 'Current Course Plan')
    // });

    after(browser => browser.end());
  });