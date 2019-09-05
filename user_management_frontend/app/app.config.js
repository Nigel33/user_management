
  angular.
  module('user-management').
  config(['$locationProvider','$routeProvider',
    function config($locationProvider, $routeProvider) {
      $routeProvider.
        when('/users', {
          templateUrl: 'components/users/users-template.html',
          controller: 'UsersController'
        })
    }
  ]);
