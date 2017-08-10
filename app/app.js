'use strict';

// Define the `contactsApp` module
var contactsApp = angular.module('contactsApp', []);

contactsApp.controller('ContactListController', function ContactListController($scope) {
	$scope.contacts = [
		{
			name: 'Nick'
		},
		{
			name: 'Eva'
		}
	];
});