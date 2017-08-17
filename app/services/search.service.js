(function() {
    'use strict';

    angular
        .module('contactsApp')
        .factory('SearchService', SearchService);

    function SearchService() {
		var state = {
			data: {
				query: ''
			}
		};
        var service = {
            get: get,
			set: set
        };
        return service;

        ////////////////

        function get() {
        	return state.data;
        }

        function set(data) {
        	Object.assign(state.data, data);
        }
    }
})();