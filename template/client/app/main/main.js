'use strict';

angular
  .module('ngDemo1App')
  .config(function ($stateProvider) {
	    $stateProvider
	      .state('main', {
	        url: '/',
	        templateUrl: 'app/main/main.html',
	        controller: 'MainCtrl'
	      });
  });