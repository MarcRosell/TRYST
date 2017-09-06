angular
    .module('Demo')
    .controller('CardController', ['$scope', function() {
    	this.date = 'nada'

    	this.confirm = function() {
    		console.log('make call to api for creating an appointment with date', this.date)
    	}
    }]);