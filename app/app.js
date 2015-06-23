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
        controller:"firstTask",
        resolve:{
          users: function(Restangular){
              return Restangular.allUrl('Users','https://api.github.com/users', {'access_token': '162c35dbe2eac71dc05a9462e0450986e4e4c4d7'}).getList();  // GET: /users
          }
        }
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
