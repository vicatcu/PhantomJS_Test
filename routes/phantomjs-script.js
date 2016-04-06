var system = require('system');
var page = require('webpage').create();
var url = system.args[1];

page.settings.userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36';
page.open(url, function (status) {
  if (status !== 'success') {
    phantom.exit();
  } else {
    setTimeout(function () {
      console.log(page.content);
      phantom.exit();
    }, 3000); // Change timeout as required to allow sufficient time
  }
});