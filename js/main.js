
/*function add_task(task) {
    if(!localStorage.tasks) {
        var newtask = [];
        localStorage.tasks = JSON.stringify(newtask);
    }
    var all_tasks = JSON.parse(localStorage.tasks);
    all_tasks.push(task);
    localStorage.tasks = JSON.stringify(all_tasks);
    return;
}*/

/*function get_all() {
    if(!localStorage.tasks) {
        var newtask = [];
        localStorage.tasks = JSON.stringify(newtask);
    }
    return JSON.parse(localStorage.tasks);
}

function delete_task(index) {
    if(!localStorage.tasks) {
        var newtask = [];
        localStorage.tasks = JSON.stringify(newtask);
    }
    var all_tasks = JSON.parse(localStorage.tasks);
    if(all_tasks.length > index) {
        all_tasks.splice(index, 1);
        localStorage.tasks = JSON.stringify(all_tasks);
    }
}*/

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
        if(event.keyCode == 13) {
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

});
