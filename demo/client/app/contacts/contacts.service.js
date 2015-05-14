'use strict';

angular
  .module('ngDemo1App')
  .service('Contacts', Contacts);

Contacts.$inject = ['$http'];

function Contacts($http) {
	
	this.get = get;
	this.getById = getById;
	this.update = update;
	
	function get(){
		return $http.get('/api/contacts');
	};

	function getById(id){
		return $http.get('/api/contacts/', { params: { id: id } });
	};

	function save(data){
		return $http.post('/api/contacts', data, {});
	};

	function update(data){
		return $http.put('/api/contacts', data, { params: { id: 1 } });
	};
};