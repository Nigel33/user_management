var userDetail = angular.module('userDetail', []);

userDetail.controller("UserDetailController", ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams) {


	function getUser(id) {
		var url = "http://localhost:3000/api/users/" + String(id); 
		
		$http.get(url).then(function(response) {
			$scope.userDetail = response.data;
			$scope.user = $scope.userDetail;

			if (!response.data) {
				document.location = '/#!/error'
			} 
		})
	}

	getUser($routeParams.id);
}]);