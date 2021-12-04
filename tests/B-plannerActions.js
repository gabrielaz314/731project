describe('B: Calendar Planner Main Actions Tests', function() {

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

    
    after(browser => browser.end());
  });