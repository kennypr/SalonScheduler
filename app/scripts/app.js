'use strict';

/**
 * @ngdoc overview
 * @name salonSchedulerApp
 * @description
 * # salonSchedulerApp
 *
 * Main module of the application.
 */
angular
  .module('salonSchedulerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleCtrl'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      
      .otherwise({
        redirectTo: '/'
      });
  });
