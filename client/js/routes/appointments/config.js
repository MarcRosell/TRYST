angular.module('Demo')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/config', {
              templateUrl: 'js/routes/appoinments/appoinments.html',
              controller: 'appointmentsController'
            })
    })
