'use strict';

angular
  .module('ngDemo1App')
  .controller('ContactsEditCtrl', ContactsEditCtrl);

ContactsEditCtrl.$inject = ['Contacts', '$stateParams', 'notifications'];

function ContactsEditCtrl(Contacts, $stateParams, notifications){	
	var vm = this;
    
    var id = $stateParams.id;

    vm.isreadonly = false;
    vm.action = 'Edit';
    vm.submit = submit;

	Contacts
		.getById(id)
	  	.success(function(data, status, headers, config){
			vm.contact = data;
	  	})
		.error(function(data, status, headers, config){
	  	   	console.log(data);
	  	});		


	function submit(){
		Contacts
			.update(vm.contact)
			.success(function(data, status, headers, config){
				notifications.showSuccess('Success..');
		  	})
			.error(function(data, status, headers, config){
		  	   	notifications.showError('Error.');
		  	});	
	};
};