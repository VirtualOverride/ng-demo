'use strict';

angular
  .module('ngDemo1App')
  .controller('ContactsCtrl', ContactsCtrl);

ContactsCtrl.$inject = ['Contacts'];

function ContactsCtrl(Contacts) {	
	var vm = this;

	Contacts.get()
	  	.success(function(data, status, headers, config){
			vm.contacts = data;
	  	})
		.error(function(data, status, headers, config){
	  	   	console.log(data);
	  	});

};