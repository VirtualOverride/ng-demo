describe("Name of the group", function() {
	var myService;

	beforeEach(function(){
		module('app');

		inject(function($injector}){
			myService = $injector.get('myService');
		});
	});
});