'use strict';

angular.module('contactsApp').
    component('contactList', {
      templateUrl: 'contact-list/contact-list.template.html',
      controller: ['Contact', 
        function ContactListController(Contact){
          this.contact = Contact.query();
          this.orderProp = 'age';
        }]
    });