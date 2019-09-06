function createUser($scope, $rootScope, $http) {
	$scope.submitUser = function(isValid) {
    var url = 'http://localhost:3000/api/users'
    var data = $scope.user;
    var config = 'contenttype';

    if (isValid) {
      $http.post(url, data, config).then(function(response) {
        $scope.users.push(response.data);  
      });
    }
  }
}

function editUser($scope, $http, $routeParams) {
	$scope.submitUser = function(isValid) {
		var url = 'http://localhost:3000/api/users/' + String($routeParams.id);
		var data = $scope.user;
		var config = 'contenttype';

		if (isValid) {
      $http.put(url, data, config).then(function(response) {
        return response.data;  
      });
    }
	}
}

function userFormDirective() {
	return {
		scope: { users: '=', user: '='  },
		name: 'ctrl',
		controller: '@',
		templateUrl: 'components/userForm/userForm-template.html',
	}
}

angular.
  module('user-management')
  .directive('userForm', userFormDirective)
	.controller('createUser', createUser)
	.controller('editUser', editUser)