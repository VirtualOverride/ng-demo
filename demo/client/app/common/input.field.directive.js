(function(){
	'use strict';

	angular
	  .module('ngDemo1App')
	  .directive('inputField', inputField);

	 function inputField(){
	 	return {
	 		restrict: 'AE',
	 		replace: true,
	 		require: 'ngModel',
	 		templateUrl: 'app/common/input.field.directive.tpl.html',
	 		scope: {
	 			id: '@',
	 			label: '@',
	 			ngModel: '=',
	 			isreadonly: '='
	 		},
	 		link: function(scope, element, attrs, controller){
	 			var form = angular.element('form');

	 			scope.expression = form.attr('name').concat('.').concat(scope.id).concat('.$invalid');
	 		}
	 	}
	 };	 

})();