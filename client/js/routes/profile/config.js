angular.module('Demo')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/user', {
              templateUrl: 'js/routes/config/profile.html',
              controller: 'configController'
            })
    })
