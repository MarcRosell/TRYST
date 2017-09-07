angular.module('Demo')

    .controller('userController', function($scope, userService, $window) {

    	const id = '59ad3ccf6a9878e5c9696dde'

        userService.getInfoUser(id)
            .then(function(user) {
                $scope.user = user
            })


        $scope.updateProfile = function(id, date) {
            userService.updateProfile();
        }

    })