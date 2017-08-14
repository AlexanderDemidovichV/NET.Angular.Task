(function(){
	'use strict';

	angular.module('contactsApp').
	    component('contactTableButtons', {
	      templateUrl: 'contact-table-buttons/contact-table-buttons.template.html',
	      controller: [ContactTableButtons],
	      controllerAs: 'vm'
	    });

	function ContactTableButtons() {
		var vm = this;

}
})();