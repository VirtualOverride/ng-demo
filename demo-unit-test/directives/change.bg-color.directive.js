(function(app){
	'use strict';

	var changeBgColor = function(){
		return {
			restrict: 'AE',
			scope: false,
			link: function(scope, element, attrs){
				if (!attrs.changeBgColor){
					throw 'You must provide a class name.'
				}

				element.bind('click', function(e){
					scope.$apply(function(){
						if (!element.hasClass(attrs.changeBgColor)){
							element.addClass(attrs.changeBgColor);
						} else {
							element.removeClass(attrs.changeBgColor);
						}
					});
				});
			}
		}
	};

	app.directive('changeBgColor', changeBgColor);

})(angular.module('app'));
