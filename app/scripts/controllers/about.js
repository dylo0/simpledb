'use strict';

/**
 * @ngdoc function
 * @name simpledbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the simpledbApp
 */
angular.module('simpledbApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
