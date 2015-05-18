'use strict';

angular
  .module('ngDemo1App')
  .controller('ContactsAddCtrl', ContactsAddCtrl);

ContactsAddCtrl.$inject = ['Contacts', 'notifications', '$timeout'];

function ContactsAddCtrl(Contacts, notifications, $timeout) {	
    var vm = this;

    vm.isreadonly = false;
    vm.action = 'Add';

    vm.submit = submit;

    vm.contact = { firstName: null, lastName: null, mobile: null  };  

	function submit(){
		Contacts
            .save(vm.contact)
			.success(function(data, status, headers, config){
				notifications.showSuccess('Success..');
                $timeout(function(){
                    window.location.href = window.location.origin.concat('/contacts/edit/' + data.id);
                }, 1500);            
		  	})
			.error(function(data, status, headers, config){
		  	   	notifications.showError('Error.');
		  	});						
	};
};