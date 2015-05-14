'use strict';

angular
  .module('ngDemo1App')
  .controller('ContactsDetailsCtrl', ContactsDetailsCtrl);

ContactsDetailsCtrl.$inject = ['$scope', 'Contacts', '$stateParams'];

function ContactsDetailsCtrl($scope, Contacts, $stateParams) {	
    var id = $stateParams.id;

    $scope.isreadonly = true;
    $scope.action = 'Details';

	Contacts.getById(id)
	  	.success(function(data, status, headers, config){
			$scope.contact = data;
	  	})
		.error(function(data, status, headers, config){
	  	   	console.log(data);
	  	});		
};