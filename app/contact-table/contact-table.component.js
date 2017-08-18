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

        var countContactsToDelete = 0;
        vm.contacts = [];
        vm.searchState = {};
        vm.orderState = {};

        vm.deleteContacts = deleteContacts;
        vm.updateContact = updateContact;
        vm.updateToDelete = updateToDelete;
        vm.isRemoveable = isRemoveable;

        activate();

        function activate(){

            getContacts();

            vm.searchState = SearchService.get();
            vm.orderState = SortService.get();
        }

        function getContacts() {
            ContactService.query(function(result){
                vm.contacts = result;
                updateCountContactsToDelete();
            });
        }

        function updateCountContactsToDelete(){
            countContactsToDelete = 0;
            _.filter(vm.contacts, function(contact){
                if(contact.SelectedToDelete === true)
                    countContactsToDelete++;
            });
        }

        function isRemoveable(){
            if (countContactsToDelete < 2){
                return true;
            }
            else{
                return false;
            }
        }

        function updateContact(contact) {
            ContactService.update({contactId: contact.Id}, contact);
        };

        function updateToDelete(contact){
            if (contact.SelectedToDelete === true)
                countContactsToDelete++;
            else{
                countContactsToDelete--;
            }
            
            vm.updateContact(contact);
        }

        function deleteContacts(){
            _.filter(vm.contacts, function(contact){
                if(contact.SelectedToDelete === true)
                    ContactService.delete({contactId: contact.Id});
            });
            getContacts();
        }

    }
})();
