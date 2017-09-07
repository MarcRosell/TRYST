angular
    .module('Demo')
    .controller('CardController', ['$scope', function($http) {
        this.date = 'click in calendar'
const userId = '59ad3ccf6a9878e5c9696dde'

        this.confirm = function() {
            console.log('make call to api for creating an appointment with date', this.date)
            var getTimeStamp = this.date.split('    ');

            // var url = '/api/results/' + getTimeStamp[1];
            // console.log(url)
            // return $http.post(url)
            //     .then(function(response) {
            //         console.log('updated')
            //         window.location.reload()
            //     })

            return $http({
                method: 'POST',
                url: '/api/results/',
                headers: {
                    'Content-Type': 'text/plain'
                },
                data: {
                    userId: userId,
                    commerceId: commerceId,
                    serviceName: serviceName,
                    time: getTimeStamp[1]
                }
            }).then(function(response) {
                console.log('updated')
                window.location.reload()
            })

        }
    }]);