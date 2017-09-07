angular.module('Demo')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/user', {
              templateUrl: 'js/routes/profile/user.html',
              controller: 'userController'
            })
    })
