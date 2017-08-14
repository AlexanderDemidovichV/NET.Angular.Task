(function(){
	'use strict';

	angular.module('contactsApp').
	    component('contactRow', {
	      templateUrl: 'contact-row/contact-row.template.html',
	      controller: [ContactRowController],
	      controllerAs: 'vm'
	    });

	function ContactRowController() {
		var vm = this;

}
})();
