(function() {
    'use strict';

    angular
        .module('contactsApp')
        .component('favorites', {
                templateUrl: 'favorites/favorites.template.html',
            controller: FavoritesController,
            controllerAs: 'vmFavorite'

        });

    FavoritesController.$inject = ['ContactService', 'lodash'];

    function FavoritesController(ContactService, lodash) {
        var vm = this;
        var countFavorite = 0;
        vm.contacts = [];

        vm.isListEmpty = isListEmpty; 

        activate();

        function activate(){
            getContacts();
        }   

        function getContacts(){
            ContactService.query(function(result) {
                vm.contacts = result;

                getCountFavourites();
            });
        }

        function getCountFavourites(){
            _.filter(vm.contacts, function(contact){
                if(contact.Favorite === true)
                    countFavorite++;
            });
        }

        function isListEmpty(){
            if (countFavorite > 0){
                return false;
            }
            else{
                return true;
            }
        }
    }
})();
