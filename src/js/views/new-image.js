'use strict';

var Backbone = require('backbone');
var view = require('../utils/view');
var formToObj = require('form-to-obj');
var router = require('../router');
var $ = require('jquery');

module.exports = Backbone.View.extend({  
  template: view.template('new-image'),

  events: {
    'submit .new-image-form': 'addImage'
  },

  initialize: function () {
    this.render();
    $('.main-content').html(this.$el);
  },

  render: function () {
    this.$el.html(this.template({ image: this.model.toJSON() }));
  },
  
  addImage: function (e) {
    e.preventDefault();
    
    var img = formToObj(e.target);
    this.model.set(img);
    
    this.model.save()
      .done(function () {
        router.navigate('images', { trigger: true });
      })
      .fail(function () {
        console.log(arguments);
        alert('Ruh roh!');
      });
  }
});