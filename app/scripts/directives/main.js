'use strict';
//###################Creating the directives object to hold all the directives###################
var ngTransclude_tests_directives = {};
//####################################################
//###################START dir########################
ngTransclude_tests_directives.pane = function() {
  return {
  restrict: 'E',
  transclude: true,
  scope: 'isolate',
  locals: { title:'bind' },
  template: '<div style="border: 1px solid black;">' +
              '<div style="background-color: gray">{{title}}</div>' +
              '<div ng-transclude></div>' +
            '</div>'
  };
};
//###################END dir##########################
//####################################################
