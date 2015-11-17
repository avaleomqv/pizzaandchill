(function(angular) {
  'use strict';
var myApp = angular.module('spicyApp1', []);

myApp.controller('SpicyController', ['$scope', '$http', 'pizza', function($scope, $http, pizza) {
	
	$http.get('/toppings.json').success(function(data) {
		console.log(angular.fromJson(data));
		$scope.toppings = data;
	});
	
    $scope.newPizza = [];
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
    
    $scope.getPizza = function() {
      $scope.newPizza = pizza.getPizza();
    }

    $scope.storePizza = function(name) {
        $scope.newPizza[0].name = name;
        $scope.konwnPizzas.push($scope.newPizza[0]);
        $scope.getPizza();
    }

    $scope.storeNewPizza = function(pizza) {
        $scope.newPizza[0] = pizza;
    }

}]);

myApp.
  factory('pizza', ['$window', function(win) {
    return {
      getPizza: function() {
        return [
          { "name": "NEW", "toppings": [ "Bacon", "Cocktailpølser" ] }
        ];
    }
    }
  }]);
})(window.angular);