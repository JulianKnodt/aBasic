angular.module('home', [])
.controller('homeController', function($location){
  this.posts = ['test'];
  $('#test').on('click', function(){
    $location.path('/sqr');
  })
})
.directive('post', function(){
  var directive = {};
  directive.template = '<a-box cursor-listener ui-sref="sqr" position="3 0 0"></a-box>';
  return directive;
});