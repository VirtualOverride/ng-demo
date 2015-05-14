
SampleService.$inject = ['$http'];

function SampleService($http) {
	
	this.get = get;
	
	function get(){
		return $http.get('/api/data');
	};
};