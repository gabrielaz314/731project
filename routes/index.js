var express = require('express');
var router = express.Router();
var axios = require('axios');

const {
  // calendar,
  fulfilled_courses,
  transfer_courses,
  non_related_courses
} = require('./testdata')

/* Homepage */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Home' });
// });
/* Application cannot be accessed until a user has logged in */
router.get('/', function(req, res) {
  res.render('login', { title: 'Login Page' });
});

/* App Routing */
router.get('/view-all-courses', function(req, res) {
  axios.get('http://localhost:3000/data/courses-by-semester/123456')
    .then((response) => {
      console.log(response.data)
      res.render('view-all-courses', {
        title: 'View All Courses',
        layout: '/layouts/sb-content',
        calendar: response.data,
      });
    })
    .catch((err) => {console.log(err)})
  
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
router.get('/view-saved-courses', function(req, res) {
  res.render('view-saved-courses', {
    title: 'View Saved Courses',
    layout: '/layouts/sb-content',
    // using the dummy data for transfer_courses
    saved_courses: transfer_courses,
  });
});
router.get('/view-course-plan', function(req, res) {
  res.render('view-course-plan', {
    title: 'View Courses Plan',
    layout: '/layouts/sb-content',
    // using the dummy data for calendar
    course_plan: splitSemesters(calendar),
  });
});
router.get('/course-search', function(req, res) {
  res.render('course-search', {
    title: 'Course Search',
    layout: '/layouts/sb-content',
    // using the dummy data for transfer_courses
    search_courses: transfer_courses,
  });
});
router.get('/profile', function(req, res) {
  res.render('profile', {
    title: 'View Profile',
    layout: '/layouts/sb-content'
  });
});

module.exports = router;
