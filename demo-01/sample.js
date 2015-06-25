(function(){
	'use strict';

	var app = angular.module('sample', []);

	function ParentController($scope){
		this.names = ['ABC', 'DEF'];
	};

	function ChildController($scope){
		this.names = ['GH', 'AC'];
	};


	app.controller('ParentController', ParentController)
		.controller('ChildController', ChildController);

})();