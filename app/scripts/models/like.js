//pull in jquery, underscore, backbone

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var CountButton = Backbone.Model.extend({
  defaults: {
    'count': 0
  },

  initialize: function(){
    console.log('BACKBONE');
  },

  incrementer: function(){
    var currentCount = this.get('count') + 1;
    this.set('count', currentCount);
    if (currentCount === 1){
      return currentCount + ' Like';
    } else {
      return currentCount + ' Likes';
    }
  },

});

module.exports = {
  'CountButton': CountButton
};
