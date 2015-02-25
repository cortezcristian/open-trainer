'use strict';

var term;

/**
 * @ngdoc directive
 * @name openTrainerApp.directive:xterm
 * @description
 * # xterm
 */

angular.module('openTrainerApp')
  .directive('xterm', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
          term = new Terminal({
              cols: 90,
              rows: 30,
              screenKeys: true
          });

          term.on('data', function(data) {
              console.log("typed data:", data);
          });

          term.on('title', function(title) {
              $('span.title-term').text(title);
          });
          

          term.open($(element)[0]);  

          t.play();
      }
    };
  });
