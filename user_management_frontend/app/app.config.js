
  angular.
  module('user-management').
  config(['$locationProvider','$routeProvider',
    function config($locationProvider, $routeProvider) {
      $routeProvider.
        when('/users', {
          template: '<users></users>'
        })
    }
  ]);
