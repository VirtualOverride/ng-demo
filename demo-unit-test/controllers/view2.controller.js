(function(app){
	'use strict';

	 var controller = (function(){
	 	function controller(){
	        this.message = 'View2 Here';
	 	}

	 	return controller;
	 })();

	 app.controller('View2Controller', controller);

})(angular.module('app'));
