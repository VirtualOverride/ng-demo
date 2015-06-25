(function(app){
	'use strict';

	var config = (function(){

		config.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];

		function config($urlRouterProvider, $stateProvider, $locationProvider){
			$urlRouterProvider.otherwise('/');
		    $locationProvider.html5Mode(true);

			$stateProvider
				.state('main', {
					url: '/',
					templateUrl: 'views/main.html',
					controller: 'MainController',
					controllerAs: 'main'		   		  	
				})
				.state('view1', {
					url: '/view1',
					templateUrl: 'views/view1.html',
					controller: 'View1Controller',
					controllerAs: 'view1'
				})
				.state('view2', {
					url: '/view2',
					templateUrl: 'views/view2.html',
					controller: 'View2Controller',
					controllerAs: 'view2'
				});
  		}

  		return config;
  	})();

	app.config(config);

})(angular.module('app'));
