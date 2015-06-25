(function(app){
	'use strict';

	 var controller = (function(){
	 	var vm, scope;

	 	controller.$inject = ['$scope'];

	 	function controller($scope){
	 		vm = this;
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
