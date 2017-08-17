(function() {
    'use strict';

    angular
        .module('contactsApp')
        .run(function(formlyConfig) {
          formlyConfig.setType({
            name: 'radioType',
            extends: 'radio',
            templateUrl: "formly-types/inline-radio.template.html",
          });
          
        });
})();