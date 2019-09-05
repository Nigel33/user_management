
  var modal = angular.module('userForm', []);

  angular.module('userForm').
    component('userForm', {
      templateUrl: 'components/userForm/userForm-template.html',
      controller: ['$http', "$scope", '$rootScope', function userFormController($http, $scope, $rootScope) {
        $scope.submitUser = function() {
          var url = 'http://localhost:3000/api/users'
          var data = $scope.user;
          var config = 'contenttype';

          $http.post(url, data, config).then(function(response) {
            $rootScope.users.push(response.data);  
          });
        }
      }]
    });


      	

