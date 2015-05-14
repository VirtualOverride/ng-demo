'use strict';

angular
  .module('ngDemo1App')
  .directive('inputReadonly', inputReadonly);

 function inputReadonly(){
 	return {
 		restrict: 'AE',
 		scope: {
 			isreadonly: "="
 		},
 		link: function(scope, element, attrs){
 			if (scope.isreadonly){
 				angular
	 				.element(element)[0]
	 				.setAttribute("readonly", "readonly");
 			} else {
  				angular
	 				.element(element)[0]
 					.removeAttribute("readonly");
 			}
 		}
 	}
 };