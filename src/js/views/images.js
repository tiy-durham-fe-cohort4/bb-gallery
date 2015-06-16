'use strict';

var Backbone = require('backbone');
var view = require('../utils/view');

module.exports = Backbone.View.extend({
  el: '.main-content',
  
  template: view.template('images'),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template({ images: this.model.toJSON() }));
  }
});