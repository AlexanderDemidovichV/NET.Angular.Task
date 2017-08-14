(function(){
	'use strict';

	angular.module('contactsApp').
	    component('contactTable', {
	    	//transclude: true,
			templateUrl: 'contact-table/contact-table.template.html',
			controller: ['Contact', 'Search', 'Sort', ContactTableController],
			controllerAs: 'vmContactTable'
	    });

	function ContactTableController(Contact, Search, Sort) {
		this.searchState = Search.get();
		this.orderState = Sort.get();
		this.contacts = Contact.query();
}
})();