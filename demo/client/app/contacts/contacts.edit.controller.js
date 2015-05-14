'use strict';

angular
  .module('ngDemo1App')
  .controller('ContactsEditCtrl', ContactsEditCtrl);

ContactsEditCtrl.$inject = ['$scope', 'Contacts', '$stateParams', 'notifications'];

function ContactsEditCtrl($scope, Contacts, $stateParams, notifications) {	
    var id = $stateParams.id;

    $scope.isreadonly = false;
    $scope.action = 'Edit';
    $scope.submit = submit;

	Contacts.getById(id)
	  	.success(function(data, status, headers, config){
			$scope.contact = data;
	  	})
		.error(function(data, status, headers, config){
	  	   	console.log(data);
	  	});		


	function submit(){
		Contacts.update($scope.contact)
			.success(function(data, status, headers, config){
				notifications.showSuccess('Success..');
		  	})
			.error(function(data, status, headers, config){
		  	   	notifications.showError('Error.');
		  	});	
	};
};