(function(){
	'use strict';

	angular.
	  module('contactsApp').
	  factory('Search', [searchService]);

	function searchService(){
		const state = {
			data: {
				query: ''
			}
		};
		return {
			get() {
				return state.data;
			},
			set(data) {
				Object.assign(state.data, data);
			}
		};
	}
})();
