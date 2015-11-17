(function(angular) {
  'use strict';
angular.module('PizzaServiceModule', []).
  factory('pizza', ['$window', function(win) {
    return {
      getPizza: function() {
        return [
          { "name": "NEW", "toppings": [ "Bacon", "Cocktailpølser" ] },
        ];
    }
  };
  }]);
})(window.angular);