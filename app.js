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
            var allToppings = {
    "Vegetables": [
        "Alfalfa Sprouts",
        "Artichoke hearts",
        "Avocado",
        "Baby leeks",
        "Beetroot",
        "Black Beans",
        "Broccoli",
        "Capers",
        "Capicolla",
        "Carrot",
        "Cherry tomatoes",
        "Dried tomatoes",
        "Eggplant",
        "Fungi",
        "Fungi carciofi",
        "Green peppers",
        "Kalamata olives",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Olives",
        "Peas",
		"Pineapple",
        "Porcini mushrooms",
        "Portobello Mushrooms",
        "Red beans",
        "Red onions",
        "Red peppers",
        "Roast cauliflower",
        "Roasted eggplant",
        "Roasted Garlic",
        "Roasted peppers",
        "scallions",
        "Shallots",
        "Snow peas",
        "Spinach",
        "Sun dried tomatoes",
        "Sweet corn",
        "Watercress",
        "Wild mushrooms",
        "Yellow peppers",
        "Yellow squash",
        "Zucchini"
    ],
    "Nuts": [
        "Almonds",
        "Peanuts",
        "Pistachios",
        "Pecans",
        "Pine Nuts",
        "Walnuts"
    ],
    "Spices": [
        "Basil",
        "Bay Leaf",
        "Cardamon",
        "Chili Dried or Fresh",
        "Chives",
        "Cilantro",
        "Coriander",
        "Cumin",
        "Dill",
        "Garlic",
        "JalapenoPeppers",
        "Laurel",
        "Marjoram",
        "MethiLeaves(akaFenugreek)",
        "Oregano",
        "Parley",
        "Pepper",
        "Rosemary",
        "Basil",
        "BayLeaf",
        "Cardamon"
    ],
    "SeaFood": [
        "Anchovies",
        "CajunPrawn",
        "Crayfish",
        "Lobster",
        "Oysters",
        "Prawns",
        "Salmon",
        "Shrimps",
        "SmokedSalmon",
        "Squid",
        "Tuna",
        "Whitebait"
    ],
    "Cheese": [
        "BlueCheese",
        "Brie",
        "Camembert",
        "Chedar",
        "Colby",
        "Feta",
        "GoatCheese",
        "Gorgonzola",
        "Limburger",
        "Manchego",
        "MontereyJack",
        "Parmesan",
        "Mozzarella",
        "Muenster",
        "PortdeSalut",
        "Provolone",
        "Ricota",
        "Romano",
        "Roquefort",
        "SmokedGouda"
    ],
    "Meats": [
        "Bacon",
        "BBQChicken",
        "Beef",
        "CajunChicken",
        "ChickenMasala",
        "ChickenTikka",
        "Chorizo",
        "Duck",
        "Ham",
        "HoneyCuredHam",
        "Meatballs",
        "Pepperoni",
        "Proscuitto",
        "Salami",
        "Sausage",
        "SerranoHam",
        "Turkey",
        "Venison"
    ]
}	;
            
                var pizza = [{ "name": "NEW", "toppings": [ ] }];
                var i = pizzaFactory.getRandomArbitrary(0, allToppings.Meats.length);
                pizza[0].toppings.push(allToppings.Meats[i]);
                i = pizzaFactory.getRandomArbitrary(0, allToppings.Vegetables.length);
                pizza[0].toppings.push(allToppings.Vegetables[i]);
                i = pizzaFactory.getRandomArbitrary(0, allToppings.Cheese.length);
                pizza[0].toppings.push(allToppings.Cheese[i]);

                return pizza;
}
      pizzaFactory.getOldPizza = function() {
          var pizza = [{ "name": "NEW", "toppings": [] } ];
          pizza[0].toppings.push(pizzaFactory.getRandomIngredients())
          
        return pizza;
      };
      
      // Returns a random number between min (inclusive) and max (exclusive)
      pizzaFactory.getRandomArbitrary = function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      
      return pizzaFactory;
  }]);
})(window.angular);