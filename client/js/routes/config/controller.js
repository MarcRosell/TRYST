angular.module('Demo')

    .controller('configController', function($scope, userService, $window) {

        userService.getInfo(id)
            .then(function(response) {
                $scope.user = response
            })


        $scope.updateProfile = function(id, date) {
            userService.updateProfile();
        }

    })