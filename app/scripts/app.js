'use strict';

var app = angular.module('App', []);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/technology', {
        templateUrl: '/views/technology.html',
        controller: 'MainCtrl'
      })
      .when('/team', {
        templateUrl: '/views/team.html',
        controller: 'MainCtrl'
      })
      .when('/team/:name', {
        templateUrl: '/views/team.html',
        controller: 'MainCtrl'
      })
      .when('/studies', {
        templateUrl: '/views/studies.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: '/views/contact.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
