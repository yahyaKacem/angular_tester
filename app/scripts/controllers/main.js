'use strict';
//###################Creating the controllers object to hold all the controlles###################
var http_tests_controllers                      = {};
var ngList_tests_controllers                    = {};
var ngSwitch_tests_controllers                  = {};
var ngSubmit_tests_controllers                  = {};
var input_mail_tests_controllers                = {};
var ngPluralize_tests_controllers               = {};
var ngTransclude_tests_controllers              = {};
//###################################################################
//###################START HttpCtrl##################################
http_tests_controllers.HttpCtrl                 = function($scope, $http){
  $scope.data   = ['yahya', 'tyoli', 'kacem'];
  $scope.item   = 'azerty';
  $scope.add    = function(item){
    $scope.data.push(item);
  };
  $scope.delete = function(item){
    var index = $scope.data.indexOf(item);
    $scope.data.splice(index, 1);
  };
}
//###################START HttpCtrl##################################
//###################################################################
//###################START NgClassCtrl###############################
ngList_tests_controllers.NgClassCtrl            = function($scope) {
  $scope.names = ['Yahya', 'Kacem', 'tyoli'];
};
//###################END NgClassCtrl#################################
//###################################################################
//###################START ngSwitch_tests############################
ngSwitch_tests_controllers.NgSwitchCtrl         = function($scope){
  $scope.items     = ['settings', 'home', 'other'];
  $scope.selection = $scope.items[0];
};
//###################END ngSwitch_tests##############################
//###################################################################
//###################START ngSubmit_tests############################
ngSubmit_tests_controllers.NgSubmitCtrl         = function($scope){
  $scope.list   = [];
  $scope.text   = 'hello';
  $scope.submit = function() {
    if(this.text) {
      this.list.push(this.text);
      this.text = '';
    }
  };
};
//###################END ngSubmit_tests##############################
//###################################################################
//###################START input_mail_tests##########################
input_mail_tests_controllers.InputMailCtrl      = function($scope){
  $scope.text = "fuj.tyoli@gmail.com";
};
//###################END input_mail_tests############################
//###################################################################
//###################START ngPluralize_tests#########################
ngPluralize_tests_controllers.NgPluralizeCtrl   = function($scope) {
  $scope.person1     = 'Yahya';
  $scope.person2     = 'Kacem';
  $scope.personCount = 1;
};
//###################END ngPluralize_tests###########################
//###################################################################
//###################START ngTransclude_tests########################
ngTransclude_tests_controllers.NgTranscludeCtrl = function($scope) {
  $scope.title = 'Some Title';
  $scope.text  = 'Some content in the content area...';
};
//###################END ngTransclude_tests##########################
//###################################################################
