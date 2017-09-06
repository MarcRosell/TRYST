angular.module('Demo')
    .controller('appointmentsController', function($scope, appointmentsService, userService, $location) {

        appointmentsService.getAppointments(userService.getUser().id)
            .then(function(appoinments) {
                $scope.appoinments = appoinments
            })

        $scope.removeAppointment = function(id, date) {
            appointmentsService.removeAppointment(id, date)
        }

    })