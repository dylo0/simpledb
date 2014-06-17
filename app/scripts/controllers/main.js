'use strict';

/**
 * @ngdoc function
 * @name simpledbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpledbApp
 */
angular.module('simpledbApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
