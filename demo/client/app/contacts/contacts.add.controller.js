'use strict';

angular
  .module('ngDemo1App')
  .controller('ContactsAddCtrl', ContactsAddCtrl);

ContactsAddCtrl.$inject = ['$scope', 'Contacts'];

function ContactsAddCtrl($scope, Contacts) {	
    var id = $stateParams.id;

    $scope.isreadonly = false;
    $scope.save = save;

	function save(){
		Contacts.save(data)
		  	.success(function(data, status, headers, config){
				
		  	})
			.error(function(data, status, headers, config){
		  	   	console.log(data);
		  	});					
	};
};