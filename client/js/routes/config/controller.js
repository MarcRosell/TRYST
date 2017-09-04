angular.module('demo')

    .controller('configController', function($scope, configService, $window) {

        configService.getInfo(id)
            .then(function(response) {
                $scope.user = response
            })


        $scope.updateProfile = function(id, date) {
            configService.updateProfile();
        }

    })