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
var http_tests_app         = angular.module('http_tests', []);
var ngList_tests_app       = angular.module('ngList_tests',[]);
var ngClass_tests_app      = angular.module('ngClass_tests',[]);
var ngSwitch_tests_app     = angular.module('ngSwitch_tests', []);
var ngSubmit_tests_app     = angular.module('ngSubmit_tests', []);
var input_mail_tests_app   = angular.module('input_mail_tests',[]);
var ngPluralize_tests_app  = angular.module('ngPluralize_tests', []);
var ngTransclude_tests_app = angular.module('ngTransclude_tests', []);
//##############################################################################
//######START injecting the dependencies########################################
//####################START controllers Injection###############################
ngList_tests_controllers.NgClassCtrl.$inject            = ['$scope'];
ngSwitch_tests_controllers.NgSwitchCtrl.$inject         = ['$scope'];
ngSubmit_tests_controllers.NgSubmitCtrl.$inject         = ['$scope'];
input_mail_tests_controllers.InputMailCtrl.$inject      = ['$scope'];
ngPluralize_tests_controllers.NgPluralizeCtrl.$inject   = ['$scope'];
ngTransclude_tests_controllers.NgTranscludeCtrl.$inject = ['$scope'];
http_tests_controllers.HttpCtrl.$inject                 = ['$scope', '$http'];
//####################END controllers Injection#################################
//##############################################################################
//####################START directives Injection################################

//####################END directives Injection##################################
//######END injecting the dependencies##########################################
//##############################################################################
//######assigning the controllers to the application############################
http_tests_app.controller(http_tests_controllers);
ngList_tests_app.controller(ngList_tests_controllers);
ngSwitch_tests_app.controller(ngSwitch_tests_controllers);
ngSubmit_tests_app.controller(ngSubmit_tests_controllers);
input_mail_tests_app.controller(input_mail_tests_controllers);
ngPluralize_tests_app.controller(ngPluralize_tests_controllers);
ngTransclude_tests_app.controller(ngTransclude_tests_controllers);
//######END assigning the controllers to the application########################
//##############################################################################
//######START assigning the directives to the application#######################
ngTransclude_tests_app.directive(ngTransclude_tests_directives);
//######END assigning the directives to the application#########################
//##############################################################################
