(function(app){
	'use strict';

	var nameService = (function(){
		var http;

		nameService.$inject = ['$http'];

		function nameService($http){
			http = $http;

			this.locations = [
				'Philippines',
				'United States of America'
			];
		}

		nameService.prototype.getNames = function(){
			return [
				'John', 'Peter', 'James', 'Simon'
			];
		};

		nameService.prototype.getNamesFromApi = function(){
			return http.get('data/names.json');
		};

		return nameService;
	})();

	app.service('NameService', nameService);

})(angular.module('app'));
