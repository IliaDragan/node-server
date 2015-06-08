var sys = require('sys');
var body_parser = require('body-parser');
var express = require('express');
var app = express();

app.use(body_parser.urlencoded({extended : false}));

app.get('/', function (req, res) {
  res
    .status(200)
    .send('Dummy nodejs server.\n');
});

app.post('/login', function (req, res) {
  var status = 200;
  var body = {
    'state' : 'ok',
  };
  
  var login = req.body.login;
  var pass = req.body.password;
  
  if (login === 'admin' && pass === '1234') {
    status = 200;
    body.email = 'admin@node.js';
  }
  else {
    status = 403;
    body.state = 'error';
  }
  
  res
    .status(status)
    .json(body);
});

var server = app.listen(1337, function() {
  var host = server.address().address;
  var port = server.address().port;
  
  sys.puts('Listening on http://' + host + ':' + port);
});
