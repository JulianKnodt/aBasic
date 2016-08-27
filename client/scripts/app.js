angular.module('app', [])
.config(function($routeProvider, $stateProvider){
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/home/home.html'
    controller: 'homeController'
  })

});