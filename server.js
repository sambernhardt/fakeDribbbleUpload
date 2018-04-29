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

function bookmarkleter(script) {
  var a = `javascript:(function() {${script}})()`;
  return a;
}

const tunnel = localtunnel(port, (err, tunnel) => {
    state.server.url = tunnel.url;
    state.server.status = tunnel._status;

    console.log("Bookmarklet served on tunnel server: " + tunnel.url)

    state.devBookmarklet =  `
      var script = document.createElement('script');
      script.src = '${tunnel.url}/bookmarklet.js';
      script.id = 'devBookmarklet';
      document.querySelector('body').appendChild(script);
    `;

});


app.get('/', function(req, res) {

  var file = fs.readFileSync('dist/bookmarklet.min.js','utf8');
  var htmlTemplate = fs.readFileSync('public/index.html','utf8');

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

// setTimeout(function() {
//   state.i = 100;
// },5000)

app.use(express.static('src'))
app.use(express.static('public'))

app.listen(port, function () {
  console.log("Bookmarklet served locally on port 3000.")
  open('http://localhost:'+port)
});
