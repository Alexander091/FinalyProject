/**
 * Created by alexander on 21.06.15.
 */
var myApp = angular.module('myApp');
myApp.controller('firstTask', function($scope, Restangular) {
    Restangular.allUrl('Users','https://api.github.com/users', {'access_token': '162c35dbe2eac71dc05a9462e0450986e4e4c4d7'}).getList()  // GET: /users
        .then(function(users) {
            // returns a list of users
            $scope.users = users;
        });
});