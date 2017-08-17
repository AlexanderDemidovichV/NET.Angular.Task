(function() {
    'use strict';

    angular
        .module('contactsApp')
        .component('orderProperty', {
            templateUrl: 'order-property/order-property.template.html',
            controller: OrderPropertyController,
            controllerAs: 'vmSort'

        });

    OrderPropertyController.$inject = ['SortService'];

    function OrderPropertyController(SortService) {
    	this.onOrderPropChange = onOrderPropChange;

        function onOrderPropChange() {
            SortService.set({ orderProp: this.text });
        }
    }
})();