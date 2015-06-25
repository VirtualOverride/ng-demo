(function(app){
	'use strict';

	var nameService = (function(){
		function nameService(){
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

		return nameService;
	})();

	app.service('NameService', nameService);

})(angular.module('app'));
