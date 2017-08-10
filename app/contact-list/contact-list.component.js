(function(){
	'use strict';

	angular.module('contactsApp').
	    component('contactList', {
	      templateUrl: 'contact-list/contact-list.template.html',
	      controller: ['Contact', ContactListController],
	      controllerAs: 'vm'
	    });

	function ContactListController(Contact) {
		var vm = this;
		vm.orderProp = 'age';
		vm.contacts = Contact.query();
}
})();
