angular.module('Demo')

    .factory('userService', function($http) {

        var user = {
            id: '59ad3ccf6a9878e5c9696dde'
        }

        var getUser = function() {
            return user
        }

        var getInfoUser = function(id) {
            var url = 'api/user/' + id
            return $http.get(url)
                .then(function(response) {
                    return response.data.data
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
            getUser: getUser,
            getInfoUser: getInfoUser,
            updateProfile:updateProfile
        }
    })