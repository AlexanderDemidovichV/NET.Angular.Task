(function(){
	'use strict';

	angular.module('contactsApp').
	    component('searchBar', {
	    	//transclude: true,
			templateUrl: 'search-bar/search-bar.template.html',
			controller: ['Search', SearchBarController],
			controllerAs: 'vmSearch'
	    });

	function SearchBarController(Search) {
		this.onQueryChange = () => {
			Search.set({ query: this.text });
		};
	}
})();