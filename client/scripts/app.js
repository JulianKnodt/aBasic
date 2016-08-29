angular.module('app', [
  'home',
  'sqr',
  'ngRoute',
  'ui.router'
  ])
.config(function($routeProvider, $stateProvider){
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'scripts/home/home.html',
    controller: 'homeController'
  })
  .state('sqr', {
    url: '/sqr',
    templateUrl: 'scripts/sqr/sqr.html',
    controller: 'sqrController'
  })

  // $routeProvider
  // .otherwise('/home');



})
.run(function($rootScope, $location){
  $location.path('/home');
});