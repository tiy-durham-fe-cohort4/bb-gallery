'use strict';

var Backbone = require('backbone');
var view = require('../utils/view');
var $ = require('jquery');

module.exports = Backbone.View.extend({  
  template: view.template('images'),
  
  events: {
    'click .delete-image': 'deleteImage'
  },

  initialize: function () {
    this.listenTo(this.model, 'all', this.render);
    this.render();
    $('.main-content').html(this.$el);
  },

  render: function () {
    this.$el.html(this.template({ images: this.model.toJSON() }));
  },
  
  deleteImage: function (e) {
    var img = this.model.get($(e.target).data('id'));
    img.destroy({ wait: true }).fail(function () {
      alert('DOHZ!');
    });
  }
});