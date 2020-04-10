//order logic

function Order() {
  this.pizzas = [],
    this.currentId = 0,
    this.name = '',
    this.address = [],
    this.totalPrice = 0


}

Order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
  this.updateTotalPrice();

}

Order.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

Order.prototype.updateTotalPrice = function () {
  var totePrice = 0;
  for (let i = 0; i < this.pizzas.length; i++) {
    totePrice += this.pizzas[i].price;
  }
  this.totalPrice = totePrice;
}

Order.prototype.displayOrder = function () {
  var pizzaDisplay = $("#pizzaDisplay");
  var htmlForOrderDisplay = "";
  var toppingsForDisplay = "";
  //console.log(this.pizzas.length);
  for (var i = 0; i < this.pizzas.length; i++) {
    for (let n = 0; n < this.pizzas[i].toppings.length; n++) {
      toppingsForDisplay += '<li>' + this.pizzas[i].toppings[n] + '</li>';
    }
    htmlForOrderDisplay += '<div id="' + this.pizzas[i].id + '" class="pizzas"> <p>Pizza ' + this.pizzas[i].id + '</p><ul>' + toppingsForDisplay + '</ul></div>';

  }
  pizzaDisplay.html(htmlForOrderDisplay);

}

//pizza logic
function Pizza(size, toppings, price) {
  this.size = size,
    this.toppings = toppings,
    this.price = 0
}

Pizza.prototype.calculatePizzaPrice = function () {
  //var pizzaPrice = 0;
  var basePrice = 6;
  var increment = 2;

  basePrice += (increment * this.size);

  if (this.toppings.includes("Cheese")) {
    basePrice += ((this.toppings.length - 1) * 2);
  } else {
    basePrice += ((this.toppings.length) * 2);
  }
  this.price = basePrice;
}

function attachPizzaListeners() {
  $("#pizzaDisplay").on("click", ".pizzas", function () {
    console.log("The id of this <li> is " + this.id + ".");
  });
};



$(document).ready(function () {
  var order = new Order();
  attachPizzaListeners();
  $("#pizzaForm").submit(function (event) {
    event.preventDefault();


    var size = parseInt($("#pizzaSize").val());
    var topp = [];

    $("input:checkbox[name=toppings]:checked").each(function () {
      var top = $(this).val();
      topp.push(top);
    });

    var pizza = new Pizza(size, topp);
    pizza.calculatePizzaPrice();

    order.addPizza(pizza);

    order.displayOrder();

    console.log(order);




  });



});