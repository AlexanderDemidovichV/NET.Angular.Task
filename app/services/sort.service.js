(function() {
    'use strict';

    angular
        .module('contactsApp')
        .factory('SortService', SortService);

    function SortService() {
		var state = {
			data: {
				orderProp: 'Id'
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
