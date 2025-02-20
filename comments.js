//Cterate Web Server
var express = require('express');
var app = express();

// Create a route for the home page
app.get('/', function(req, res) {
  res.send('Welcome to the home page!');
});

// Create a route for the /comments page
app.get('/comments', function(req, res) {
  res.send('Welcome to the comments page!');
});

// Start the server
app.listen(3000, function() {
  console.log('Listening on port 3000');
});