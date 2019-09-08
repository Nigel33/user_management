var userServices = angular.module('userServices', []);

userServices.service('userServices', function($http) {
	var url = 'http://localhost:3000/api/users'
	var config = 'contenttype';


	this.getUsers = function() {
		return $http.get(url).then(function(response) {
	    return response.data;
	  });
	}

	this.getUser = function(id) {
		return $http.get(url + '/' + id).then(function(response) {
			return response.data
		})
	}

	this.updateUser = function(user) {
		return $http.put(url + '/' + user.id, user, config).then(function(response) {
			return response.data;
		});
	}

	this.createUser = function(user) {
		return $http.post(url, user, config).then(function(response) {
			return response.data;
		});
	}

	this.deleteUser = function(id) {
		return $http.delete(url + '/' + id).then(function(res) {
			return ;
		})
	}

});