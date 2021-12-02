var express = require('express');
var router = express.Router();
const {
  calendar,
  fulfilled_courses,
  transfer_courses,
  non_related_courses
} = require('./testdata')

/* Homepage */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});
/* Application cannot be accessed until a user has logged in */
router.get('/login', function(req, res) {
  res.render('login', { title: 'Login Page' });
});

/* App Routing */

// Helper function to render semesters in 2 columns
function splitSemesters(calendar) {
  var a = [];
  var b = [];

  calendar.forEach((semester, index) => {
    if (index % 2 == 0)
      a.push(semester)
    else
      b.push(semester)
  });
  return [a,b]
}
router.get('/view-all-courses', function(req, res) {
  res.render('view-all-courses', {
    title: 'View All Courses',
    layout: '/layouts/sb-content',
    calendar: splitSemesters(calendar),
  });
});
router.get('/fulfilled-requirements', function(req, res) {
  res.render('fulfilled-requirements', {
    title: 'Fulfilled Requirements',
    layout: '/layouts/sb-content',
    fulfilled_courses: fulfilled_courses,
  });
});
router.get('/transfer-credits', function(req, res) {
  res.render('transfer-credits', {
    title: 'Transfer Credits',
    layout: '/layouts/sb-content',
    transfer_courses: transfer_courses,
  });
});
router.get('/non-related', function(req, res) {
  res.render('non-related', {
    title: 'Transfer Credits',
    layout: '/layouts/sb-content',
    non_related_courses: non_related_courses,
  });
});

module.exports = router;
