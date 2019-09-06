
  angular.
  module('user-management').
  config(['$locationProvider','$routeProvider',
    function config($locationProvider, $routeProvider) {
      $routeProvider.
        when('/', {
          redirectTo: '/users',
        }).
        when('/users', {
          templateUrl: 'components/users/users-template.html',
          controller: 'UsersController'
        }).when('/users/:id', {
          templateUrl: 'components/userDetail/userDetail-template.html',
          controller: 'UserDetailController'
        }).otherwise('/error');

      $routeProvider.when('/error', {
        templateUrl: 'general/error.html'
      })
    }
  ]);
