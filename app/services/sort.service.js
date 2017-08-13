(function(){
	'use strict';

	angular.
	  module('contactsApp').
	  factory('Sort', [sortService]);

	function sortService(){
		const state = {
			data: {
				orderProp: 'age'
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