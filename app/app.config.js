(function(){
  'use strict';

  angular.
    module('contactsApp').
    config(['$locationProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider', 'blockUIConfig', config]);

  function config($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, blockUIConfig){
    blockUIConfig.autoBlock = true;
    blockUIConfig.resetOnException = true;
    blockUIConfig.message = 'Please wait';

    $locationProvider.hashPrefix("");
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/contacts");

    $stateProvider
      .state('contacts', {
        url: "/contacts",
        views: {
          '': {
            templateUrl: './state.template/filterable-contact-table.template.html'
          }
        }
      })
      .state('contact.edit', {
        url: "/contacts/:contactId",
        template: '<contact-edit></contact-edit>'
      })
      .state('favorite', {
        url: "/favorites",
        template: '<favorites></favorites>'
      });
  }

})();

