function createUser(userServices, $scope, $http) {
	$scope.submitUser = function(isValid) {
    if (isValid) {
      userServices.createUser($scope.user).then(function(newUser) {
        $scope.users.push(newUser);  
      });
    }
  }
}

function editUser(userServices, $scope, $http, $routeParams) {
	$scope.submitUser = function(isValid) {
		if (isValid) {
      userServices.updateUser($scope.user).then(function(res) {
      	return res;
      })
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