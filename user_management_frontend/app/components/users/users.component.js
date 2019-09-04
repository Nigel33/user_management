'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('users').
  component('users', {
    templateUrl: 'components/users/users-template.html',
    controller: ['$http', function UsersController($http) {
      self = this;

      $http.get('http://localhost:3000/api/users').then(function(response) {
        self.users= response.data;
      });
    }]
  });
