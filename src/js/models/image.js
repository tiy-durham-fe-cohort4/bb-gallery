'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  idAttribute: '_id',
  
  urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/cdavies-gallery'
});