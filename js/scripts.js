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

Order.prototype.deletePizza = function (id) {
  for (var i = 0; i < this.pizzas.length; i++) {

    if (this.pizzas[i]) {

      if (this.pizzas[i].id == id) {
        delete this.pizzas[i];
        return true;
      }
    }
  }
  return false;
}

Order.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

Order.prototype.updateTotalPrice = function () {
  var totePrice = 0;
  for (let i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      totePrice += this.pizzas[i].price;
    }
  }
  this.totalPrice = totePrice;
  $("#total").removeClass("hidden");
  $("#currentPrice").text(this.totalPrice);
}

Order.prototype.addPizzaToList = function () {
  var listItem = "";
  var pizzaList = $("#pizzaList");
  $(".confirmOrder").show();
  for (var i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      listItem += '<li id="' + this.pizzas[i].id + '"> Pizza ' + this.pizzas[i].id + ' </li>';
    }
  }
  pizzaList.html(listItem);

}

Order.prototype.displayOrder = function (id) {
  var size = '';
  var price = 0;
  var thisName = "";

  $("#pizzaDisplayBox").show();

  for (var i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        thisName = "Pizza " + this.pizzas[i].id;
        price = this.pizzas[i].price;
        if (this.pizzas[i].size == 0) {
          size = "small";
        } else if (this.pizzas[i].size == 1) {
          size = "medium";
        } else {
          size = "large";
        }
        var toppingsForDisplay = "";
        for (let n = 0; n < this.pizzas[i].toppings.length; n++) {
          toppingsForDisplay += '<li>' + this.pizzas[i].toppings[n] + '</li>';
        }
      }
    }
  }
  $("#pizzaCheck").text(thisName);
  $("#pizzaPrice").text(price);
  $("#displayList").html(toppingsForDisplay);
  $("#pizzaSizeDisplay").text(size);
  $("#deleteButton").html('<button id="' + id + '" type="button">delete this pizza</button>')

}

Order.prototype.printReceipt = function (deliv) {

  var totalPizzas = 0;

  for (var i = 0; i < this.pizzas.length; i++) {
    if (!jQuery.isEmptyObject(this.pizzas[i])) {
      totalPizzas += 1;
    }
  }

  var time = 10;

  time += (5 * totalPizzas);

  if (deliv === "delivery") {
    time += 20;
  }

  $("#receiptName").text(this.name);
  $("#numberReceipt").text(totalPizzas);
  $("#timeReceipt").text(time);

  if (deliv === "pickup") {
    $("#methodReceipt").text("Please come pick it up");
    $("#priceReceipt").text(this.totalPrice);

  } else {
    $("#methodReceipt").text("A member of our delivery team will bring it straight to your door!");
    var price = this.totalPrice + 5;
    $("#priceReceipt").text(price);
    $("#deliveryFee").text(" including a $5.00 delivery fee!")
    $("#deliverTo").text("This will be delivered to:" + this.address[0] + ", " + this.address[1] + ", " + this.address[2]);

  }

}


//pizza logic
function Pizza(size, toppings, price) {
  this.size = size,
    this.toppings = toppings,
    this.price = 0
}

Pizza.prototype.calculatePizzaPrice = function () {
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

function attachPizzaListeners(order) {
  $("#pizzaList").on('click', 'li', function () {

    order.displayOrder(this.id);

  });
  $("#deleteButton").on("click", "button", function () {
    $(".pizzaList#" + this.id).addClass("hide");
    order.deletePizza(this.id);
    order.addPizzaToList();

    $("#pizzaDisplayBox").hide();
    order.updateTotalPrice();


  });
};

// UI


$(document).ready(function () {
  var order = new Order();
  attachPizzaListeners(order);
  $("#pizzaForm").submit(function (event) {
    event.preventDefault();


    var size = parseInt($("#pizzaSize").val());
    var topp = [];

    $("input:checkbox[name=toppings]:checked").each(function () {
      var top = $(this).val();
      topp.push(top);
    });

    $("#pizzaSize option").prop('selected', function () {
      return this.defaultSelected;
    });

    $("input:checkbox[name=toppings]:checked").each(function () {
      this.checked = false;
    })

    var pizza = new Pizza(size, topp);
    pizza.calculatePizzaPrice();

    order.addPizza(pizza);

    order.addPizzaToList();

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

    order.name = name;
    if (deliv === "pickup") {
      order.printReceipt(deliv);
      recModal.style.display = "block";
      //print receipt
    } else {
      addressModal.style.display = "block";
      addressConfirm.onclick = function () {
        street = $("#streetForm").val();
        city = $("#cityForm").val();
        zip = $("#zipForm").val();
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
  });
});