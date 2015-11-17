(function(angular) {
  'use strict';
var myApp = angular.module('spicyApp1', []);

myApp.controller('SpicyController', ['$scope', '$http', function($scope, $http) {
	
	$http.get('/toppings.json').success(function(data) {
		console.log(angular.fromJson(data));
		$scope.toppings = data;
	});
	
	$scope.konwnPizzas = [
    {
        "name": "Hawaii",
        "toppings": [
            "Pineapple",
            "Cheese",
            "Ham"
        ]
    },
    {
        "name": "Lars",
        "toppings": [
            "Bacon",
            "Cocktailpølser"
        ]
    },
    {
        "name": "Jul",
        "toppings": [
            "Duck"
        ]
    }
];
	
	$scope.orderPizza = function(id) {
		alert("ordered pizza: " +$scope.konwnPizzas[id].name);
	}
	
	$scope.currentIngredints = [ ];
		
	$scope.addIngredient = function(ingredient) {
		$scope.currentIngredints.push(ingredient);
	};
	
	$scope.removeIngredient = function(index) {
		alert($scope.currentIngredints[index]);
		$scope.currentIngredints.splice(index, 1);	
	}

}]);
})(window.angular);