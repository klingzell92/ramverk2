var express = require('express');
var router = express.Router();

// MongoDB
const mongo = require("mongodb").MongoClient;
const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/movies";


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

router.get('/chat', function(req, res) {
    res.render('chat', { title: 'Chatt' });
});


module.exports = router;
