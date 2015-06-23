/**
 * Created by alexander on 22.06.15.
 */

var myApp = angular.module('myApp');
myApp.controller('secondTask', function($scope) {
    $scope.userForm = {
        message:"",
        email:"",
        pwd:"",
        confpwd:""
    }
    $scope.submit = function(isValid){
        if (isValid) {
            $scope.userForm.message = "Submitted " + $scope.userForm.email;
        } else {
            $scope.userForm.message = "There are still invalid fields below";
        }
    }
});


var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};
myApp.directive("compareTo", compareTo);

