'use strict';

angular.
  module('contactsApp').
  factory('Contact', ['$resource',
    function($resource) {
      return $resource('contacts/:contactId.json', {}, {
        query: {
          method: 'GET',
          params: {contactId: 'contacts'},
          isArray: true
        }
      });
    }
  ]);