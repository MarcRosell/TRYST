angular.module('demo')
    .controller('appoinmentsController', function($scope, appoinmentsService, $location) {

        appoinmentsService.getAppointments(id)
            .then(function(appoinments) {
                $scope.appoinments = appoinments
            })


        $scope.removeAppointment = function(id, date) {
            appoinmentsService.removeAppointment(id, date)
        }

    })