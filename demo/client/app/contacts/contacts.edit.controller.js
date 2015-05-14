'use strict';

angular
  .module('ngDemo1App')
  .controller('ContactsEditCtrl', ContactsEditCtrl);

ContactsEditCtrl.$inject = ['$scope', 'Contacts', '$stateParams', 'notifications'];

function ContactsEditCtrl($scope, Contacts, $stateParams, notifications) {	
    var id = $stateParams.id;

    $scope.isreadonly = false;
    $scope.save = save;

	Contacts.getById(id)
	  	.success(function(data, status, headers, config){
			$scope.contact = data[0];
	  	})
		.error(function(data, status, headers, config){
	  	   	console.log(data);
	  	});		


	function save(){
		Contacts.update($scope.contact)
			.success(function(data, status, headers, config){
				console.log(data);
		  	})
			.error(function(data, status, headers, config){
		  	   	console.log(data);
		  	});	
	};
};