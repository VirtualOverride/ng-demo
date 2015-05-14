'use strict';

angular
  .module('ngDemo1App')
  .config(function ($stateProvider) {
	    $stateProvider
			.state('contacts', {
			    url: '/contacts',
			    templateUrl: 'app/contacts/contacts.html',
			    controller: 'ContactsCtrl'
			})
			.state('contacts-edit', {
					url: '/contacts/edit/:id',
					templateUrl: 'app/contacts/contacts.edit.html',
					controller: 'ContactsEditCtrl'
			})
			.state('contacts-details', {
					url: '/contacts/details/:id',
					templateUrl: 'app/contacts/contacts.edit.html',
					controller: 'ContactsDetailsCtrl'
			})
			.state('contacts-delete', {
					url: '/contacts/delete/:id',
					templateUrl: 'app/contacts/contacts.edit.html',
					controller: 'ContactsDetailsCtrl'
			});
  });