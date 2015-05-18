'use strict';

angular
  .module('ngDemo1App')
  .controller('ContactsDeleteCtrl', ContactsDeleteCtrl);

ContactsDeleteCtrl.$inject = 
	['Contacts', '$stateParams', 'notifications', '$timeout'];

function ContactsDeleteCtrl(Contacts, $stateParams, notifications, $timeout){	
	var vm = this;
    var id = $stateParams.id;    

    vm.isreadonly = true;
    vm.action = 'Delete';
    vm.submit = submit;

	Contacts
		.getById(id)
	  	.success(function(data, status, headers, config){
			vm.contact = data;
	  	})
		.error(function(data, status, headers, config){
			if (status === 404) {
				notifications.showError('Error: Contact not Found.');
				$timeout(function(){
					window.location.href = window.location.origin.concat('/contacts');
				}, 2000);
			}
	  	});		


	function submit(){
		Contacts
			.delete(id)
			.success(function(data, status, headers, config){
				notifications.showSuccess('Success..');
				$timeout(function(){
					window.location.href = window.location.origin.concat('/contacts');
				}, 2000);
		  	})
			.error(function(data, status, headers, config){
		  	   	notifications.showError('Error.');
		  	});	
	};
};