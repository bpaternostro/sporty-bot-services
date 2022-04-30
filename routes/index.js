var express = require('express');
var router = express.Router();
const db = require('../conf/queries')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/exercises', db.getExercises)

module.exports = router;
