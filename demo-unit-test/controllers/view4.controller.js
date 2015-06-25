(function(app){
	'use strict';

	 var controller = (function(){
	 	var nameService;

	 	controller.$inject = ['$scope', 'NameService']

	 	function controller($scope, NameService){
	 		$scope.names = NameService.getNames();
	 	}

	 	return controller;
	 })();

	 app.controller('View4Controller', controller);

})(angular.module('app'));
