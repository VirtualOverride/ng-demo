(function(){
	'use strict';

	angular
		.module('app', ['ui.router'])
		.config(function($urlRouterProvider, $stateProvider, $locationProvider) {

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
				  .state('view1.child', {
			        url: '/view1-child/:name/:id',
			        templateUrl: 'view1-child.html',
			        controller: 'View1ChildController',
			        controllerAs: 'child'				  	
				  })
				  .state('view2', {
			        url: '/view2',
			        templateUrl: 'view2.html',
			        controller: 'View2Controller',
			        controllerAs: 'view2'
			      });

		    $urlRouterProvider
		      		.otherwise('/');

		    $locationProvider.html5Mode(true);

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
  		.controller('View1Controller', function(NameService){
  			this.message = 'View1 Here';

  			 this.names = NameService.names;

  		})
  		.controller('View2Controller', function(){
  			this.message = 'View2 Here'
  		})
  		.controller('View1ChildController', function($stateParams){
  			this.message = $stateParams.name + ' - ' + $stateParams.id; 
  		})
  		.service('NameService', function(){
  			this.names = ['A', 'B'];
  		})
})();







