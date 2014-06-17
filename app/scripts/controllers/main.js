'use strict';

/**
 * @ngdoc function
 * @name simpledbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpledbApp
 */
angular.module('simpledbApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.elements = [{
    	time: '123',
    	name: 'asd',
    	value: 'val'
    	},
    	{
    	time: '433',
    	name: 'asd',
    	value: 'val'
    	},
    	{
    	time: '673',
    	name: 'asd',
    	value: 'val'
    	}
    ]

  });

