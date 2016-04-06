var express = require('express');
var router = express.Router();
var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs-prebuilt');
var binPath = phantomjs.path;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/fetch', function(req, res, next){
  var childArgs = [
    path.join(__dirname, 'phantomjs-script.js'),
    req.query.url
  ];

  childProcess.execFile(binPath, childArgs, function (err, stdout, stderr) {
    res.send(stdout);
  });
});

module.exports = router;
