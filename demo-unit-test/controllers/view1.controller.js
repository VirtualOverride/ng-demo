(function(app){
	'use strict';

	 var controller = (function(){
	 	function controller(){
	        this.message = 'View1 Here';
	        this.names = ['John', 'Peter', 'Simon'];
	 	}

	 	return controller;
	 })();

	 app.controller('View1Controller', controller);

})(angular.module('app'));
