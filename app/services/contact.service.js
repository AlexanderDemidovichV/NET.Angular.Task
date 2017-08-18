(function() {
    'use strict';

    angular
        .module('contactsApp')
        .factory('ContactService', contactService);

    contactService.$inject = ['$resource'];

    function contactService($resource) {
        var service = $resource('http://localhost:51997/api/contacts/:contactId', {}, {
            query: {
							method: 'GET',
							params: {contactId: ''},
							isArray: true
						},
						update: {
							method: 'PUT'
						},
						delete: {
							method: 'DELETE'
						},
						post: {
							method: 'POST'
						}
        });
        return service;

    }
})();
