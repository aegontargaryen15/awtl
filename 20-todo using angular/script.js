// app.js
var app = angular.module('todoApp', []);

app.controller('TodoController', ['$scope', function($scope) {
    $scope.todos = [];
    
    $scope.addTodo = function() {
        if ($scope.newTodo) {
            $scope.todos.push({ text: $scope.newTodo });
            $scope.newTodo = '';
        }
    };
    
    $scope.deleteTodo = function(index) {
        $scope.todos.splice(index, 1);
    };
}]);
