(function(){
	'use strict';

	angular.module('contactsApp').
	    component('searchBar', {
	      templateUrl: 'search-bar/search-bar.template.html',
	      controller: ['Search', SearchBarController],
	      controllerAs: 'vm'
	    });

	function SearchBarController(Search) {
		var vm = this;
		Search.query = vm.query;
	}
})();