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
