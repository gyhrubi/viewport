var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider){
    
    $routeProvider
    .when('/', {templateUrl: 'custompage/custompage.html'})
    
}]);

app.controller('appCtrl', ['$scope', function($scope){
    
    $scope.leftNav = true;
    $scope.footer = true;
    
    $scope.toggleLeftNav = function() {
        
        if ($scope.leftNav === true) {
            $scope.leftNav = false;
        } else {
            $scope.leftNav = true;
        }        
    }
    
    $scope.toggleFooter = function() {
        
        if ($scope.footer === true) {
            $scope.footer = false;
        } else {
            $scope.footer = true;
        }        
    }
    
}]);