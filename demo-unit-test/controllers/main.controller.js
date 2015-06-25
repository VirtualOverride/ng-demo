/* global angular */

(function(app){
	'use strict';

	 var controller = (function(){
	 	function controller(){
  			this.menus = [{
  				name: 'View1',
  				link: '/view1'
  			}, {
  				name: 'View2',
  				link: '/view2'
  			}];

  			this.message = 'Main Here';
	 	}

	 	return controller;
	 })();

	 app.controller('MainController', controller);

})(angular.module('app'));
