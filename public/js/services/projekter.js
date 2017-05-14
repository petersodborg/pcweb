angular.module('projekterService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Projekter', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/projekter');
			},
			create : function(projekterData) {
				return $http.post('/api/projekter', projekterData);
			}
		}
	}]);