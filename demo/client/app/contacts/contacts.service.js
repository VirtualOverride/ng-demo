'use strict';

angular
  .module('ngDemo1App')
  .service('Contacts', Contacts);

Contacts.$inject = ['$http'];

function Contacts($http) {
	
	this.get = get;
	this.getById = getById;
	this.update = update;
	this.delete = deleteContact;
	this.save = save;
	
	function get(){
		return $http.get('/api/contacts');
	};

	function getById(id){
		return $http.get('/api/contacts/'.concat(id));
	};

	function save(data){
		return $http.post('/api/contacts', data);
	};

	function update(data){
		return $http.put('/api/contacts', data);
	};

	function deleteContact(id){
		return $http.delete('/api/contacts/'.concat(id));
	};
};