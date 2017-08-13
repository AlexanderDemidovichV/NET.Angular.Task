(function(){
	'use strict';

	angular.module('contactsApp').
	    component('orderProperty', {
	    	templateUrl: 'order-property/order-property.template.html',
	    	controller: ['Sort', OrderPropertyController],
	    	controllerAs: 'vmSort'
	    });

	function OrderPropertyController(Sort){
		this.onOrderPropChange = () => {
			Sort.set({ orderProp: this.text });
		};
	}
})();