var userDetail = angular.module('userDetail', []);

userDetail.controller("UserDetailController", ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams) {
	function getUser() {
		var url = "http://localhost:3000/api/users/" + String($routeParams.id) 
		console.log($routeParams.id);

		$http.get(url).then(function(response) {
			$scope.userDetail = response.data;

			if (!response.data) {
				document.location = '/#!/error'
			} 
		})
	}

	getUser();
}]);