(function(){
	'use strict';

	angular.module('contactsApp').
	    component('contactTable', {
	      templateUrl: 'contact-table/contact-table.template.html',
	      controller: ['Contact', 'Search', ContactTableController],
	      controllerAs: 'vm'
	    });

	function ContactTableController(Contact, Search) {
		var vm = this;
		vm.orderProp = 'age';
		vm.contacts = Contact.query();
		vm.query = Search.query;
}
})();