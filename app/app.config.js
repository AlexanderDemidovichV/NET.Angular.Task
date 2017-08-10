'use strict';

angular.
  module('contactsApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/contacts', {
          template: '<contact-list></contact-list>'
        }).
        when('/contacts/:contactId', {
          template: '<contact-edit></contact-edit>'
        }).
        otherwise('/contacts');
    }
  ]);