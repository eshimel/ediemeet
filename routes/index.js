var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res) {
  var myArtwork = [];
  var myArtists = [];

  myArtists = appdata.projects;
  appdata.projects.forEach(function(item) {
    myArtwork = myArtwork.concat(item.artwork);
  });
  res.render('index', {
    title: 'Home',
    artwork: myArtwork,
    artists: myArtists,
    page: 'home'
  });
});

/* GET projects page. */
router.get('/projects', function(req, res) {
  var myArtwork = [];
  var myArtists = [];
  myArtists = appdata.projects;

  appdata.projects.forEach(function(item) {
    myArtwork = myArtwork.concat(item.artwork);
  });
  res.render('projects', {
    title: 'Projects',
    artwork: myArtwork,
    artists: myArtists,
    page: 'artistList'
  });
});


/* GET projects detail page */
router.get('/projects/:projectid', function(req, res) {
  var myArtwork = [];
  var myArtists = [];

  appdata.projects.forEach(function(item) {
    if (item.shortname == req.params.projectid) {
      myArtists.push(item);
      myArtwork = myArtwork.concat(item.artwork);
    }
  });
  res.render('projects', {
    title: 'Projects',
    artwork: myArtwork,
    artists: myArtists,
    page: 'artistDetail'
  });
});




module.exports = router;
