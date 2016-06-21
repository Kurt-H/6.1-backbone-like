//console.log('Hello World!');

var $ = require('jquery');
//var _ = require('underscore');
var models = require('./models/like.js');

var likeButton = new models.CountButton();

$('.like-btn').on('click', function(event){
  event.preventDefault();
  var count = likeButton.incrementer();
  console.log(count);
  $('.like-btn').text(count);
});

$('.like-btn')
.mousedown(function(){
  $(this).css({background: 'linear-gradient(#F4F4F4, #E3E3E3)'});
});

$('.like-btn')
.mouseup(function(){
  $(this).css({background: 'linear-gradient(#E3E3E3, #F4F4F4)'});
});
