'use strict';

var router = require('../router');
var ImageView = require('../views/new-image');
var ImageModel = require('../models/image');

router.route('images/new', function () {
  new ImageView({ model: new ImageModel() });
});
