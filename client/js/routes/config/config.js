angular.module('demo')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/profile', {
              templateUrl: 'js/routes/config/config.html',
              controller: 'configController'
            })
    })
