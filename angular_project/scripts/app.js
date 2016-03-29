angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
        console.log("Hello there! This is the helloWorld function");
    };
});