var userDetail = angular.module('userDetail', []);

userDetail.controller("UserDetailController", ['$http', '$scope', '$routeParams', 'userServices', function($http, $scope, $routeParams, userServices) {
	userServices.getUser($routeParams.id).then(function(userDetail) {
		$scope.userDetail = userDetail;
		$scope.user = $scope.userDetail;
		
		if (!userDetail) {
			document.location = '/#!/error'
		} 
	})
}]);