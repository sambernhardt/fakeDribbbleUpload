// setup
var express = require('express');
  var app = express();
  var localtunnel = require('localtunnel');
  var fs = require('fs');
  var port = 3000;
  var Mustache = require('mustache');
  var open = require('open');
  var state = {
  server: {},
  i: 0
}

// helpers
function bookmarkleter(script) {
  var a = `javascript:(function() {${script}})()`;
  return a;
}
function devBookmarklet(url) {
  return `
    if (document.querySelector('#devBookmarklet')) {
      document.querySelector('#devBookmarklet').remove();
    }
    var script = document.createElement('script');
    script.src = '${url}/bookmarklet.js';
    script.id = 'devBookmarklet';
    document.querySelector('body').appendChild(script);
  `
}

// tunnel
const tunnel = localtunnel(port, (err, tunnel) => {
  console.log("Bookmarklet served on tunnel server: " + tunnel.url)
  state.server.url = tunnel.url;
  state.server.status = tunnel._status;
  state.devBookmarklet =  devBookmarklet(tunnel.url);
});

// express
app.get('/', function(req, res) {

  var file = fs.readFileSync('dist/bookmarklet.min.js','utf8');
  var htmlTemplate = fs.readFileSync('server/index.html','utf8');

  // wait for tunnel to initiate
  setTimeout(function() {
    var obj = {
      url: state.server.url,
      dev: bookmarkleter(state.devBookmarklet),
      final: file
    };
    res.send(Mustache.render(htmlTemplate, obj))
  }, 1000)
})

app.get('/api/status', function(req, res) {
  res.json(state);
})

app.use(express.static('src'))
app.use(express.static('server'))
app.listen(port, function () {
  console.log("Bookmarklet served locally on port 3000.")
  open('http://localhost:'+port)
});
