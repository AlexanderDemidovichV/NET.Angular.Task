(function() {
    'use strict';

    angular
        .module('contactsApp')
        .component('contactEdit', {
        	templateUrl: 'contact-edit/contact-edit.template.html',
            controller: ContactEditController,
            controllerAs: 'vmContactEdit'

        });

    ContactEditController.$inject = ['$routeParams', 'ContactService', '$http'];

    function ContactEditController($routeParams, ContactService, $http) {
    	var vm = this;
    	vm.contact = {};
    	vm.Submit = Submit;
    	vm.EditContact = EditContact;
    	vm.GetContact = GetContact;

    	activate();

    	function activate(){
    		vm.GetContact();
    	}

		  function GetContact(){
		  	ContactService.get({contactId: $routeParams.contactId}, function(result){
		  		vm.contact = result;
		  	});
		  }

		  function Submit() {
		  	vm.EditContact();
	    };

	    function EditContact() {
    	  	var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
    		};
	  	    $http.post('http://localhost:51997/api/contacts', JSON.stringify(vm.contact), config);
		};
    }
})();