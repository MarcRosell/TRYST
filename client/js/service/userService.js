angular.module('Demo')

    .factory('userService', function($http) {

        var getInfoUser = function(id) {
            var url = 'api/user/' + id
            return $http.get(url)
                .then(function(response) {
                    return response.data
                })
        }

        var updateProfile = function() {
            var url = '/api/user/update'
            return $http.put(url)
                .then(function(response) {
                    console.log('updated')
                    window.location.reload()
                })
        }

        return {
            getInfoUser: getInfoUser,
            updateProfile:updateProfile
        }
    })