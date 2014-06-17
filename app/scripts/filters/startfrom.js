'use strict';

/**
 * @ngdoc filter
 * @name simpledbApp.filter:startfrom
 * @function
 * @description
 * # startfrom
 * Filter in the simpledbApp.
 */
angular.module('simpledbApp')
  .filter('startfrom', function () {
    return function (input) {
      return 'startfrom filter: ' + input;
    };
  });
