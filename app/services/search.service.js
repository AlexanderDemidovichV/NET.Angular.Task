(function(){
	'use strict';

	angular.
	  module('contactsApp').
	  factory('Search', [searchService]);

	function searchService(){
	  return {
	  	query: ""
	  };
	}
})();
