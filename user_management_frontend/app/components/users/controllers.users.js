var users = angular.module('users', []);

users.controller("UsersController", ['$http', '$scope', '$rootScope', 'userServices', function($http, $scope, $rootScope, userServices) {
	userServices.getUsers().then(function(res) {
		$scope.users = res;
	});

	$scope.addUser = function(e) {
    var $button = angular.element(e.target);
    
    $button.next('.modal').toggleClass('invisible')
  };

  $scope.deleteUser = function(id) {
  	userServices.deleteUser(id).then(function(_) {
  		$scope.users = $scope.users.filter(function(user) {
  			return user.id !== id;
  		})
  	});
  };
}]);