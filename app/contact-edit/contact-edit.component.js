(function(){
	'use strict';

	angular.
	  module('contactsApp').
	  component('contactEdit', {
	    templateUrl: 'contact-edit/contact-edit.template.html',
	    controller: ['$routeParams', 'Contact', ContactEditController],
	    controllerAs: 'vm'
	  });

	function ContactEditController($routeParams, Contact){
	  var vm = this;
	  vm.contact = Contact.get({contactId: $routeParams.contactId});
	}
})();

        