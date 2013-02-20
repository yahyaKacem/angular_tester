'use strict';
//###################Creating the controllers object to hold all the controlles###################
var httpTestsControllers      = {};
//###################################################################
//###################START HttpCtrl##################################
httpTestsControllers.HttpCtrl = function($scope, $http){
  $scope.data       = ['yahya', 'tyoli', 'kacem'];
  $scope.item       = 'azerty';
  var handleRequest = function(data, status){
    console.log(data.data);
    $scope.data = data.data;
  }
  $scope.add        = function(item){
    $http.post("post.php", item).success(handleRequest)
    $scope.data.push(item);
  };
  $scope.delete     = function(item){
    var index = $scope.data.indexOf(item);
    $scope.data.splice(index, 1);
  };
}
//###################START HttpCtrl##################################
//###################################################################
