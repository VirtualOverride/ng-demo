'use strict';

angular
  .module('ngDemo1App')
  .controller('ContactsDetailsCtrl', ContactsDetailsCtrl);

ContactsDetailsCtrl.$inject = ['Contacts', '$stateParams'];

function ContactsDetailsCtrl(Contacts, $stateParams) {	
    var vm = this;
    
    var id = $stateParams.id;

    vm.isreadonly = true;
    vm.action = 'Details';

	Contacts
		.getById(id)
	  	.success(function(data, status, headers, config){
			vm.contact = data;
	  	})
		.error(function(data, status, headers, config){
	  	   	console.log(data);
	  	});		
};