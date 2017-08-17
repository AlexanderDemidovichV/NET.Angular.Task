(function() {
    'use strict';

    angular
        .module('contactsApp')
        .component('searchBar', {
        	templateUrl: 'search-bar/search-bar.template.html',
            controller: SearchBarController,
            controllerAs: 'vmSearch'

        });

    SearchBarController.$inject = ['SearchService'];

    function SearchBarController(SearchService) {
    	this.onQueryChange = onQueryChange;

    	function onQueryChange(){
    		SearchService.set({ query: this.text });
    	}
    }
})();