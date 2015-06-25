describe("App: NameService", function() {
	var nameService,
		httpBackend;

	beforeEach(function(){
		module('app');

		inject(function($injector){
			nameService = $injector.get('NameService');
			httpBackend = $injector.get('$httpBackend');
		});
	});

	describe("Null check.", function() {
		it("It should contain NameService", function() {
			expect(nameService).not.toBe(null);
		});
	});

	describe("Initialization.", function() {
		it("It should initialize locations", function() {
			expect(nameService.locations.length).toBeGreaterThan(0);
		});
	});

	describe("Functions and Methods", function() {		
		describe("getNames", function() {
			it("It should return a length of 4.", function() {
				expect(nameService.getNames().length).toEqual(4);
			});
		});

		describe("getNamesFromApi", function() {
			it("It should return a length of 4.", function() {
				var result;
				var expectResult = ["John", "Peter", "James", "Simon"];

				httpBackend
					.expectGET("data/names.json")
					.respond({
						 names: ["John", "Peter", "James", "Simon"]
					});

				nameService
					.getNamesFromApi()
					.then(function(response){
						result = response.data.names;
					})

				httpBackend.flush();

				expect(result).toEqual(expectResult);
			});
		});
	});
});