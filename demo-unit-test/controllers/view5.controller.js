(function(app){
	'use strict';

	 var controller = (function(){
	 	
	 	controller.$inject = ['$scope', 'NameService']

	 	function controller($scope, NameService){
	 		NameService
	 			.getNamesFromApi()
	 			.then(function(response){
	 				$scope.names = response.data.names;
	 			});
	 	}

	 	return controller;
	 })();

	 app.controller('View5Controller', controller);

})(angular.module('app'));
