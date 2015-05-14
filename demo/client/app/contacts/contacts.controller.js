'use strict';

angular
  .module('ngDemo1App')
  .controller('ContactsCtrl', ContactsCtrl);

ContactsCtrl.$inject = ['$scope', 'Contacts'];

function ContactsCtrl($scope, Contacts) {	

	Contacts.get()
	  	.success(function(data, status, headers, config){
			$scope.contacts = data;
	  	})
		.error(function(data, status, headers, config){
	  	   	console.log(data);
	  	});

};