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

myApp.factory('pizza', ['$window', '$http', function(win, $http) {
    var pizzaFactory = {};
    
        pizzaFactory.getPizza = function() {
            $http.get('/toppings.json').success(function(data) {
                console.log(angular.fromJson(data));
                //data.Vegetables[2];
                
                var pizza = [{ "name": "NEW", "toppings": [] } ];
                pizza[0].toppings.push(data.Vegetables[2]);

                
            });
        }

      pizzaFactory.getRandomIngredients = function() {
        var ingredients = pizzaFactory.getAllToppings();
        
        // TODO get 3 toppings and return them in a comma separated string
        var i = pizzaFactory.getRandomArbitrary(0, 4);
        
        return "Bacon";
      };
      
      pizzaFactory.getOldPizza = function() {
          var pizza = [{ "name": "NEW", "toppings": [] } ];
          pizza[0].toppings.push(pizzaFactory.getRandomIngredients())
          
        return pizza;
      };
      
      // Returns a random number between min (inclusive) and max (exclusive)
      pizzaFactory.getRandomArbitrary = function(min, max) {
        return Math.random() * (max - min) + min;
      }
      
      return pizzaFactory;
  }]);
})(window.angular);