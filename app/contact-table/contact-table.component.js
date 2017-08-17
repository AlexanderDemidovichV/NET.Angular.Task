(function() {
    'use strict';

    angular
        .module('contactsApp')
        .component('contactTable', {
            templateUrl: 'contact-table/contact-table.template.html',
            controller: ContactTableController,
            controllerAs: 'vmContactTable'
        });

    ContactTableController.$inject = ['ContactService', 'SearchService', 'SortService', 'lodash'];

    function ContactTableController(ContactService, SearchService, SortService, lodash) {
        var vm = this;
        vm.contactsToDelete = [];
        vm.contacts = [];
        vm.searchState = {};
        vm.orderState = {};

        vm.DeleteContacts = DeleteContacts;
        vm.UpdateContact = UpdateContact;
        vm.GetContacts = GetContacts;

        activate();

        function activate(){

            vm.GetContacts();
                /*var ppost = ContactService.post(vm.contacts[1], function(){
                    var updated = vm.contacts[1].Name = "udppp";
                    var pput = ContactService.update({contactId: 1}, vm.contacts[1], function(){
                        var ddelete = ContactService.delete({contactId: 1});
                    });
                });*/

                
                //var ddelete = ContactService.delete({contactId: 1});
                /*$http.put('http://localhost:51997/api/contacts', JSON.stringify(vm.contacts[1]), { params: { Id: 2}}).then(function(result){
                    var temp = result;
                //vm.contacts = result.data;
                });*/

            vm.searchState = SearchService.get();
            vm.orderState = SortService.get();
        }

        function GetContacts() {
            ContactService.get(function(result){
                vm.contacts = result;
            });
        }

        function UpdateContact(contact) {
            ContactService.update({contactId: contact.Id}, contact);
        };

        function DeleteContacts(){
            _.filter(vm.contacts, function(contact){
                if(contact.SelectedToDelete === true)
                    ContactService.delete({contactId: contact.Id});
            });
            vm.GetContacts();
        }

    }
})();
