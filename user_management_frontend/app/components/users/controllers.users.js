var users = angular.module('users', []);

users.controller("UsersController", ['$http', '$scope', '$rootScope', function($http, $scope, $rootScope) {
	function getUsers() {
		$http.get('http://localhost:3000/api/users').then(function(response) {
	    $rootScope.users = response.data;
	  });
	}

	getUsers();

	$scope.addUser = function(e) {
    var $button = angular.element(e.target);
    
    $button.next('.modal').toggleClass('invisible')
  };
}]);