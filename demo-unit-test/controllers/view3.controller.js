(function(app){
	'use strict';

	 var controller = (function(){
	 	var scope;

	 	controller.$inject = ['$scope'];

	 	function controller($scope){
	 		scope = $scope;

	        scope.message = 'View3 Here';
	        this.isMessage = true;
	 	}

	 	controller.prototype.changeMessage = function(newMessage){
	 		scope.message = newMessage;
	 	};

	 	return controller;
	 })();

	 app.controller('View3Controller', controller);

})(angular.module('app'));
