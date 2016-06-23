// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var unsplash = require('unsplash-api');

// init unsplash-api
var clientId = process.env.UNSPLASH_KEY;
unsplash.init(clientId);

// With /images request we send back 10 photos in an array from unsplash from a random page. Each page has 10 photos and nature searchterm had around 40 000
app.get("/images", function (request, response) {
  unsplash.searchPhotos(request.query.id, null, Math.floor(Math.random() * 10), null, function(error, photos, link) {
     response.send(photos);
  });
});

/*
You can get all the categories with

unsplash.getAllCategories(function(error, categories) {
   console.log(categories);
});*/

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});