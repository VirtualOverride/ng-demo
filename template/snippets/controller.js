
SampleCtrl.$inject = ['$scope', 'SampleService'];

function SampleCtrl($scope, SampleService) {	

	SampleService.get()
	  	.success(function(data, status, headers, config){
			$scope.data = data;
	  	})
		.error(function(data, status, headers, config){
	  	   	console.log(data);
	  	});

};