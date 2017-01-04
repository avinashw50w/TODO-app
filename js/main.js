
function getTasks($localStorage) {
    if(!$localStorage.tasks) {
        $localStorage.tasks = [];
    }
    return $localStorage.tasks;
}


var app = angular.module("todoApp", ['ngStorage']);

app.controller('todoController', function($scope, $localStorage) {
    $scope.title = "MY TODO LIST";

    $scope.data = {};
    $scope.data.newTask = "";
    $scope.data.all_tasks = getTasks($localStorage);

    $scope.addTask = function(event) {
        if(event.keyCode == 13 && $scope.data.newTask) {
            var newtask = {};
            newtask.description = $scope.data.newTask;
            newtask.date = new Date();
            $scope.data.all_tasks.push(newtask);
            $localStorage.tasks = $scope.data.all_tasks;
            $scope.data.newTask = "";
        }
    }

    $scope.addTask1 = function() {
        if($scope.data.newTask) {
            var newtask = {};
            newtask.description = $scope.data.newTask;
            $scope.data.all_tasks.push(newtask);
            $localStorage.tasks = $scope.data.all_tasks;
            $scope.data.newTask = "";
        }
    }

   $scope.deleteTask = function(index) {
        $scope.data.all_tasks.splice(index, 1);
        $localStorage.tasks = $scope.data.all_tasks;
    }

    $scope.removeAllTasks = function() {
        $scope.data.all_tasks = [];
        $localStorage.tasks = [];
    }

});
