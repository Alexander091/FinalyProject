/**
 * Created by alexander on 21.06.15.
 */
var myApp = angular.module('myApp');
myApp.controller('firstTask', function($scope, users) {
    $scope.users = users;
});