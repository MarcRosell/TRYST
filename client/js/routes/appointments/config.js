angular.module('Demo')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/appointments', {
              templateUrl: 'js/routes/appoinments/appoinments.html',
              controller: 'appointmentsController'
            })
    })
