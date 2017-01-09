
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
            toBottom();
        }
    }

    $scope.addTask1 = function() {
        if($scope.data.newTask) {
            var newtask = {};
            newtask.description = $scope.data.newTask;
            newtask.date = new Date();
            $scope.data.all_tasks.push(newtask);
            $localStorage.tasks = $scope.data.all_tasks;
            $scope.data.newTask = "";
            toBottom();
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

var listArea = $(".list-area");
var listAreaTop = listArea.scrollTop();

function toBottom() {
    if(listAreaTop == 0) {
        listArea.animate({scrollTop: listArea[0].scrollHeight}, 'slow');
    }
}

console.log(listAreaTop);
