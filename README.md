# _Pizza Parlor_

#### Takes a pizza order from the user and calculates a price, then allows the user to order another pizza. Once the user has made as many pizzas as they want, they can order, giving them a timer telling them how long until their pizza are ready._, 4/10/2020_

#### By _**DJ Zevenbergen**_

## Description

_This web application uses objects, prototypes, looping, and arrays to recieve a user's pizza order, then calculates the cost of the order based on the amount of toppings. There are different categories of prices. It allows the user to place multiple pizza orders if desired, and then allows for the option of delivery or pickup, giving an estimated ready/delivery time depending on the number of pizzas. If you order 5 pizzas, you'll be greeted by the Pizza God._

## Setup/Installation Requirements

* Download entire repo
* Open index.html in browser
* If it doesn't work, it may require having Bootstrap 3.3.7 CSS file in CSS folder and jQuery 3.4.1 JS file in JS folder

## Specs

* - The program returns the user's order and pizza number upon "order" click.
    * Input: "Large", "Cheese", "Pepperoni", "Anchovies"
    * Output: "Pizza 1, "Large", "Cheese", "Pepperoni", "Anchovies"

* - The program calculates and returns a price based on the amound of toppings, with cheese not counting as an extra topping.
    * Input: "Large", "Cheese", "Pepperoni", "Anchovies"
    * Output: "Pizza 1, "Large", "Cheese", "Pepperoni", "Anchovies", "$14.00"

* - The program has capabilities to handle multiple different pizzas, calculating total cost upon order
    * Input: '"Large","Cheese", "Pepperoni", "Anchovies", '"Small", "Cheese", "Sausage"'
    * Output: '"Pizza 1", "Large","Cheese", "Pepperoni", "Anchovies", "$14.00"', '"Pizza 2", "Small", "Cheese", "Sausage", "$8.00"' 


* - As the user orders, they should be able to click on a list of their pizzas to see details, and delete a pizza if desired.
    * Input: "Pizza 1" on click
    * Output: "Large","Cheese", "Pepperoni", "Anchovies", "$14.00" - "Delete?"

* - The program deletes pizzas upon click of the delete button.
  * Input: "Cheese, Pepperoni, Anchovies" - "Delete?"  -- on click
  * Output: "pizza 1 - deleted"

* - The program gives a total price and estimated time that the pizza will be ready based on number of pizzas and pickup vs delivery option
  * Example: Estimated time goes up by 5 minutes per pizza and 20 minutes is added if it is a delivery
  


## Known Bugs
- The submit button says "add another pizza" even if the user hasn't entered a pizza yet
- On click, the individual pizza details are displayed far down the page with no alert or anything notifying the user
- The receipt says "your pizzas" plural, even if the user only orders 1 pizza


## Access to Website

_https://djzevenbergen.github.io/pizza-parlor_

## License

Copyright © 2020

**_DJ Zevenbergen_**
