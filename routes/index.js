var express = require('express');
var router = express.Router();


router.get('/login', function(req, res) {
  res.render('login', { title: 'Login Page' });
});

/* Homepage directs to login */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

module.exports = router;
