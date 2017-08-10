'use strict';

angular.
  module('contactsApp').
  component('contactEdit', {
    templateUrl: 'contact-edit/contact-edit.template.html',
    controller: ['$routeParams', 'Contact',
      function ContactEditController($routeParams, Contact) {
      	var self = this;

        self.contact = Contact.get({contactId: $routeParams.contactId}, function(contact){ });
      }
    ]
  });