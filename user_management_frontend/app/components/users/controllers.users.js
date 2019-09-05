var users = angular.module('users', []);

users.controller("UsersController", ['$http', '$scope', function($http, $scope) {
	function getUsers() {
		$http.get('http://localhost:3000/api/users').then(function(response) {
	    $scope.users = response.data;
	  });
	}

	getUsers();
}]);