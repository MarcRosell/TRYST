angular.module('demo')

    .factory('appointmentsService', function($http) {


        var getAppointments = function(userId) {
            var url = 'api/user/' + userId
            return $http.get(url)
                .then(function(response) {
                    return response.data.appointments
                })
        }


        var removeAppointment = function(id, date) {
            var url = '/api/user/' + id + '/remove/' + date
            return $http.put(url)
                .then(function(response) {
                    console.log('ok')
                    window.location.reload()
                })
        }

        return {
            removeAppointment:removeAppointment,
            getAppointments: getAppointments
        }
    })

