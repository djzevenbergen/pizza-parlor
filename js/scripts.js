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
  var size = '';
  $(".confirmOrder").show();

  //console.log(this.pizzas.length);
  for (var i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i].size == 0) {
      size = "small";
    } else if (this.pizzas[i].size == 1) {
      size = "medium";
    } else {
      size = "large";
    }
    for (let n = 0; n < this.pizzas[i].toppings.length; n++) {
      toppingsForDisplay += '<li>' + this.pizzas[i].toppings[n] + '</li>';
    }
    htmlForOrderDisplay += '<div id="piz' + this.pizzas[i].id + '" class="pizzas"> <p>Pizza ' + this.pizzas[i].id + '</p><button id=" ' + this.pizzas[i].id + '" type="button" class="close" aria-label="Close">&times;</button><ul class="hidden" id="infopiz' + this.pizzas[i].id + '"><li>Price: $' + this.pizzas[i].price + '</li><li>Size: ' + size + '</li>' + toppingsForDisplay + '</ul></div>';

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
    $("#info" + this.id).toggleClass("hidden");
    console.log(this.id);
  });
  $("#pizzaDisplay").on("click", ".close", function () {
    $("#piz" + this.id).addClass("hide");

    console.log(this.id);
  });
};


Order.prototype.printReceipt = function (deliv) {
  if (deliv === "pickup") {
    $("#receiptName").text(this.name);
    $("#numberReceipt").text(this.pizzas.length);
    $("#timeReceipt").text("20");
    $("#methodReceipt").text("Please come pick it up");
    $("#priceReceipt").text(this.totalPrice);
  } else {


  }


}


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
  $("#finishOrder").click(function () {
    var name = $("#nameForm").val();
    var deliv = $("input:radio[name=takeout]:checked").val();
    var recModal = document.getElementById("receiptModal");
    var addressModal = document.getElementById("addressModal");
    var addressConfirm = document.getElementById("addressButton");
    var span = document.getElementById("closes");

    var street = "";
    var city = "";
    var zip = "";

    console.log(name);
    console.log(deliv);



    order.name = name;
    if (deliv === "pickup") {
      order.printReceipt(deliv);
      recModal.style.display = "block";
      //print receipt
    } else {
      addressModal.style.display = "block";
      addressConfirm.onclick = function () {
        street = $("streetForm").val();
        city = $("cityForm").val();
        zip = $("zipForm").val();
        order.address.push(street);
        order.address.push(city);
        order.address.push(zip);
        addressModal.style.display = "none";
        order.printReceipt(deliv);
        recModal.style.display = "block";

      }

    }

    span.onclick = function () {

      recModal.style.display = "none";
      window.location.reload();
    }

    console.log(order);

  });








});