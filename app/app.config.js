(function(){
  'use strict';

  angular.
    module('contactsApp').
    config(['$locationProvider', '$routeProvider', config]);

  function config($locationProvider, $routeProvider){
    $locationProvider.hashPrefix("");

    $routeProvider.
      when('/contacts', {
        template: '<filterable-contact-table></filterable-contact-table>'
      }).
      when('/contacts/:contactId', {
        template: '<contact-edit></contact-edit>'
      }).
      when('/favorites', {
        template: '<favorites-contact></favorites-contact>'
      }).
      otherwise('/contacts'); 
    /*$locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
          });*/
  }
})();
