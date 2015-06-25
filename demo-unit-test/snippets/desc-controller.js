describe("Name of the group", function() {
	var rootScope,
		scope,
		controller;

	beforeEach(function(){
		module('app');

		inject(function($injector}){
			rootScope = $injector.get('$rootScope');
			scope = rootScope.$new();
			controller = $injector.get('$controller')('controllerName', {
				$scope: scope
			});
		});
	});
});