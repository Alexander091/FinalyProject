'use strict';

var myApp = angular.module('myApp', ['ui.router', 'restangular', 'ngMessages']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  $urlRouterProvider.otherwise("/firstTask");
  //
  // Now set up the states
  $stateProvider
      .state('firstTask', {
        url: "/firstTask",
        templateUrl: "firstTask/firstTask.html",
        controller:"firstTask"
      })
      .state('secondTask', {
          url: "/secondTask",
          templateUrl: "secondTask/secondTask.html",
          controller:"secondTask"
      })
      .state('secondTask.finish', {
          url: "/finish",
          templateUrl: "secondTask/finishSecondTask.html",
          controller:null
      })
});
