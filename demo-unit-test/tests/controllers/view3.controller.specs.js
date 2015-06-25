describe("App: View3Controller", function() {
	var $rootScope,
		$scope,
		controller;

	beforeEach(function(){
		module('app');

		inject(function($injector){
			$rootScope = $injector.get('$rootScope');
			$scope = $rootScope.$new();
			controller = $injector.get('$controller')('View3Controller', {
				$scope: $scope
			});
		});
	});

	describe("Initialize message", function() {
		it("It Should initialize message", function() {
			expect($scope.message).toEqual('View3 Here');
		});

		it("It Should initialize isMessage", function() {
			expect(controller.isMessage).toEqual(true);
		});
	});

	describe("Action Handlers", function() {
		it("It Should change the $scope.message value", function() {
			controller.changeMessage('My New Message');
			expect($scope.message).toEqual('My New Message');
		});
	});
});