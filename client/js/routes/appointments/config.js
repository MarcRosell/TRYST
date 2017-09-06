angular.module('Demo')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/appointments', {
              templateUrl: 'js/routes/appointments/appointments.html',
              controller: 'appointmentsController'
            })
    })
