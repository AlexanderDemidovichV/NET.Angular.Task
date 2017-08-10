(function(){
	'use strict';

	angular.module('contactsApp').
	    component('contactList', {
	      templateUrl: 'contact-list/contact-list.template.html',
	      controller: ['Contact', ContactListController]
	    });

	function ContactListController(Contact) {
		var self = this;
		self.orderProp = 'age';
		self.contacts = Contact.query();
}
})();
