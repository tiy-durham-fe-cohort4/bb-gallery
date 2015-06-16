'use strict';

var _ = require('underscore');

var views = require('views');

module.exports = {  
  template: function (templateKey) {
    return _.template(views[templateKey], { variable: 'm' });
  }
};