(function(){
	'use strict';

	angular
		.module('app', ['ui.router'])
		.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
		    $urlRouterProvider
		      		.otherwise('/');

		    $locationProvider.html5Mode(true);

		   	$stateProvider
		   		  .state('main', {
			        url: '/',
			        templateUrl: 'main.html',
			        controller: 'MainController',
			        controllerAs: 'main'		   		  	
		   		  })
			      .state('view1', {
			        url: '/view1',
			        templateUrl: 'view1.html',
			        controller: 'View1Controller',
			        controllerAs: 'view1'
			      })
				  .state('view2', {
			        url: '/view2',
			        templateUrl: 'view2.html',
			        controller: 'View2Controller',
			        controllerAs: 'view2'
			      });
  		})
  		.controller('MainController', function(){
  			this.menus = [{
  				name: 'View1',
  				link: '/view1'
  			}, {
  				name: 'View2',
  				link: '/view2'
  			}];

  			this.message = 'Main Here';
  		})
  		.controller('View1Controller', function(){
  			this.message = 'View1 Here';
  		})
  		.controller('View2Controller', function(){
  			this.message = 'View2 Here'
  		});
})();







