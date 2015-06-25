describe("App: View5Controller", function() {
	var rootScope,
		scope,
		controller,
		nameService,
		nameServiceSpy;

	var spyOnHelper = function(service, fnName, result){
		return spyOn(service, fnName).and.returnValue({
			then: function(fn){
				fn(result);
			}
		});
	};

	beforeEach(function(){
		module('app');

		inject(function($injector){
			nameService = $injector.get('NameService');

			nameServiceSpy = spyOnHelper(nameService, 
				'getNamesFromApi', {
					data: { names: ["John", "Peter", "James", "Simon"] }
				});						

			rootScope = $injector.get('$rootScope');
			scope = rootScope.$new();
			controller = $injector.get('$controller')('View5Controller', {
				$scope: scope
			});
		});
	});

	describe("Initialization", function() {
		it("It should return array of names", function() {
			expect(scope.names)
				.toEqual(["John", "Peter", "James", "Simon"])
		});
	});

});