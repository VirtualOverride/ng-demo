'use strict';

angular
  .module('ngDemo1App')
  .config(function ($stateProvider) {
	    $stateProvider
			.state('contacts', {
			    url: '/contacts',
			    templateUrl: 'app/contacts/contacts.html',
			    controller: 'ContactsCtrl',
			    controllerAs: 'vm'
			})
			.state('contacts-edit', {
					url: '/contacts/edit/:id',
					templateUrl: 'app/contacts/contacts.edit.html',
					controller: 'ContactsEditCtrl',
					controllerAs: 'vm'
			})
			.state('contacts-details', {
					url: '/contacts/details/:id',
					templateUrl: 'app/contacts/contacts.edit.html',
					controller: 'ContactsDetailsCtrl',
					controllerAs: 'vm'
			})
			.state('contacts-delete', {
					url: '/contacts/delete/:id',
					templateUrl: 'app/contacts/contacts.edit.html',
					controller: 'ContactsDeleteCtrl',
					controllerAs: 'vm'
			})
			.state('contacts-add', {
					url: '/contacts/add',
					templateUrl: 'app/contacts/contacts.edit.html',
					controller: 'ContactsAddCtrl',
					controllerAs: 'vm'
			});
  });