'use strict';

angular
  .module('ngDemo1App')
  .controller('ContactsAddCtrl', ContactsAddCtrl);

ContactsAddCtrl.$inject = ['$scope', 'Contacts', 'notifications', '$timeout'];

function ContactsAddCtrl($scope, Contacts, notifications, $timeout) {	

    $scope.isreadonly = false;
    $scope.action = 'Add';

    $scope.submit = submit;

    $scope.contact = reset();  

	function submit(){
		Contacts.save($scope.contact)
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

    function reset(){
        return {
            firstName: null,
            lastName: null,
            mobile: null           
        }
    };
};