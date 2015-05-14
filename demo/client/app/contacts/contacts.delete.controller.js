'use strict';

angular
  .module('ngDemo1App')
  .controller('ContactsDeleteCtrl', ContactsDeleteCtrl);

ContactsDeleteCtrl.$inject = ['$scope', 'Contacts', '$stateParams'];

function ContactsDeleteCtrl($scope, Contacts, $stateParams) {	
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
	};
};