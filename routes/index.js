var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/listusers.html', function(req, res, next) {
  res.send('this is not a security vulnerability!')
})

module.exports = router;
