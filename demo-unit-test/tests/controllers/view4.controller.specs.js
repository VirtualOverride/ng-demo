describe("App: View4Controller", function() {
	var rootScope,
		scope,
		controller,
		nameService;

	beforeEach(function(){
		module('app');

		inject(function($injector){
			nameService = $injector.get('NameService');

			spyOn(nameService, 'getNames')
				.and
				.returnValue(["John", "Peter", "James", "Simon"]);

			rootScope = $injector.get('$rootScope');
			scope = rootScope.$new();
			controller = $injector.get('$controller')('View4Controller', {
				$scope: scope,
				NameService: nameService
			});
		});
	});


	describe("Initialization", function() {
		it("It should", function() {
			expect(scope.names)
				.toEqual(["John", "Peter", "James", "Simon"])
		});
	});

});