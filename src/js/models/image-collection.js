'use strict';

var Backbone = require('backbone');
var ImageRecord = require('./image');

module.exports = Backbone.Collection.extend({
  model: ImageRecord,
  
  url: 'http://tiny-pizza-server.herokuapp.com/collections/cdavies-gallery'
});