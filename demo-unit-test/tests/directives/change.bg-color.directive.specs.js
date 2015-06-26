describe("App: Change BgColor Directive" , function() {
	var rootScope,
		scope,
		controller,
		compile,
		element,
		body = $('body'),
		html = '<button change-bg-color="red"></button>';

	beforeEach(function(){
		module('app');

		inject(function($injector){
			rootScope = $injector.get('$rootScope');
			scope = rootScope.$new();
			compile = $injector.get('$compile');
			element = compile(angular.element(html))(scope);
		});

		body.append(element);
		rootScope.$digest();
	});


	it("It should toggle the class on click", function() {
		expect(element.hasClass('red')).toBeFalsy();
		element.click();
		scope.$digest();

		expect(element.hasClass('red')).toBeTruthy();
		element.click();
		scope.$digest();

		expect(element.hasClass('red')).toBeFalsy();
		element.click();
		scope.$digest();	
		
		expect(element.hasClass('red')).toBeTruthy();
		element.click();
		scope.$digest();	
	});

	it("It should throw an error in compile with an empty color", function() {
		expect(function(){
			compile(angular.element('<button change-bg-color></button>'))(scope);
		}).toThrow();
	});

});