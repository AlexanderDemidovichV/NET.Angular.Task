(function(){
  'use strict';

  angular.
    module('contactsApp').
    config(config);

  config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider', 'blockUIConfig'];

  function config($locationProvider, $stateProvider, $urlRouterProvider, blockUIConfig){
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
            templateUrl: './state.template/filterable-contact-table.state.template.html'
          }
        }
      })
      .state('contact', {
        url: "/contact/:contactId",
        views: {
          '': {
            templateUrl: './state.template/contact-add.state.template.html'
          }
        }
      })
      .state('favorite', {
        url: "/favorites",
        views: {
          '': {
            templateUrl: './state.template/favorite.state.template.html'
          }
        }
      })
      .state('contact/add', {
        url: "/contact",
        views: {
          '': {
            templateUrl: './state.template/contact-add.state.template.html'
          }
        }
      });
  }

})();

