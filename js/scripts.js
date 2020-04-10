//order logic

function Order() {
  this.pizzas = [],
    this.currentId = 0,
    this.name = '';
  this.address = [],
    this.totalPrice = 0


}

Order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

Order.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

Order.prototype.updateTotalPrice = function () { }



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




$(document).ready(function () {
  var order = new Order();
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
    console.log(order);
    //console.log(pizza);



  })



})