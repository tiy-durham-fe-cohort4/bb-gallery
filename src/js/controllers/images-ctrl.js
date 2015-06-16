'use strict';

var router = require('../router');
var ImagesView = require('../views/images');
var ImageCollection = require('../models/image-collection');

router.route('', 'images', function () {
  var images = new ImageCollection();
  
  images.fetch().done(function () {
    new ImagesView({ model: images });
  }).fail(function () {
    console.error(arguments);
    alert('Failed to load...');
  });
});
