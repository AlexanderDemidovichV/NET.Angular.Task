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
        vm.contactsToDelete = [];
        vm.contacts = [];
        vm.searchState = {};
        vm.orderState = {};

        vm.deleteContacts = deleteContacts;
        vm.updateContact = updateContact;
        vm.getContacts = getContacts;
        vm.updateToDelete = updateToDelete;
        vm.isRemoveable = isRemoveable;

        activate();

        function activate(){

            vm.getContacts();
            
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
            if (countContactsToDelete <= 2){
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
            vm.getContacts();

            /*vm.contacts.forEach(function(contact){
                if(contact.SelectedToDelete === true)
                    ContactService.delete({contactId: contact.Id});
            });*/
            /*var ret = async.filter(vm.contacts, function(contact, index, callback){
                if(contact.SelectedToDelete === true)
                    ContactService.delete({contactId: contact.Id});
            }, function(err, results){
                console.log(results);
            });*/
        }


    }
})();
