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
    $scope.data.push(item);
    $http.post("post.php", item).success(handleRequest)
  };
  $scope.delete     = function(item){
    var index = $scope.data.indexOf(item);
    $scope.data.splice(index, 1);
  };
}
//###################START HttpCtrl##################################
//###################################################################

'use strict';
//###################Creating the directives object to hold all the directives###################

'use strict';
angular.module('angularTesterApp', ['http_tests'])
       .config(function ($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'views/main.html',
            controller: 'HttpCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
      });
//##############################################################################
var httpTestsApp = angular.module('http_tests', []);
//##############################################################################
//######START injecting the dependencies########################################
//####################START controllers Injection###############################
httpTestsControllers.HttpCtrl.$inject = ['$scope', '$http'];
//####################END controllers Injection#################################
//##############################################################################
//####################START directives Injection################################
//####################END directives Injection##################################
//######END injecting the dependencies##########################################
//##############################################################################
//######assigning the controllers to the application############################
httpTestsApp.controller(httpTestsControllers);
//######END assigning the controllers to the application########################
//##############################################################################
//######START assigning the directives to the application#######################
//######END assigning the directives to the application#########################
//##############################################################################
