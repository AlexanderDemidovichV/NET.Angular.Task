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
    	vm.contacts = [];
    	vm.getContacts = getContacts;
        vm.isFavorites = isFavorites;
        vm.isListEmpty = true; 

        vm.isFavoritess = (list) => list.find((x) => x.Favorite === true) || (vm.isListEmpty = false);

    	activate();

    	function activate(){
    		vm.getContacts();
    	}	

    	function getContacts(){
    		ContactService.get(function(result) {
        	   vm.contacts = result;
               
               vm.isListEmpty = isFavorites();
			});
    	}

        function isFavorites(){
            return !_.every(vm.contacts, ['Favourite', false]);
        }
    }
})();
