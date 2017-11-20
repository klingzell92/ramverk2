var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res) {
    res.render('about', { title: 'Om' });
});

router.get('/report', function(req, res) {
    res.render('report', { title: 'Report' });
});

router.get('/application', function(req, res) {
    res.render('application', { title: 'App' });
});

module.exports = router;
