
function add_task(task) {
    if(!localStorage.tasks) {
        var newtask = [];
        localStorage.tasks = JSON.stringify(newtask);
    }
    var all_tasks = JSON.parse(localStorage.tasks);
    all_tasks.push(task);
    localStorage.tasks = JSON.stringify(all_tasks);
    return;
}

function get_all() {
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
}


var app = angular.module("todoApp", []);

app.controller('todoController', function($scope) {
    $scope.title = "MY TODO LIST";

    $scope.data = {};
    $scope.data.add = "";
    $scope.data.all_tasks = get_all();

    $scope.data.keydown = function(event) {
        if(event.keyCode == 13) {
            var newtask = {};
            newtask.description = $scope.data.add;
            add_task(newtask);
            $scope.data.all_tasks = get_all();
            $scope.data.add = "";
        }
    }

    $scope.data.delete = function(index) {
        delete_task(index);
        $scope.data.all_tasks = get_all();
    }

});
