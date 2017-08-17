(function() {
    'use strict';

    angular
        .module('contactsApp')
        .service('BlockUiService', BlockUiServiceController);

    BlockUiServiceController.$inject = ['blockUI'];

    function BlockUiServiceController(blockUI) {
    		var myBlock = blockUI.instances.get("mainBlock");
        this.start = startBlock;
        this.stop = stopBlock;

        ////////////////

        function startBlock() {
        	myBlock.start();
        }

        function stopBlock() {
        	myBlock.stop();
        }

    }
})();

