'use strict';

angular
  .module('ngDemo1App')
  .controller('ContactsDeleteCtrl', ContactsDeleteCtrl);

ContactsDeleteCtrl.$inject = 
	['$scope', 'Contacts', '$stateParams', 'notifications', '$timeout', '$location'];

function ContactsDeleteCtrl($scope, Contacts, $stateParams, notifications, $timeout, $location){	
    var id = $stateParams.id;

    $scope.isreadonly = true;
    $scope.action = 'Delete';
    $scope.submit = submit;

	Contacts.getById(id)
	  	.success(function(data, status, headers, config){
			$scope.contact = data;
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
		Contacts.delete(id)
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