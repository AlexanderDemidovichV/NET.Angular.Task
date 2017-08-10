'use strict';

angular.module('contactsApp').
    component('contactList', {
      templateUrl: 'contact-list/contact-list.template.html',
      controller: ['$http', function ContactListController($http) {
      	var self = this;

      	this.orderProp = 'age';

        $http.get('contacts/contacts.json').then(function(response){
        	self.contacts = response.data;
        });

      }]
    });