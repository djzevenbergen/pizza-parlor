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

* - The program returns the user's order and name upon "order" click.
    * Input: Name: "Dave", "Cheese", "Pepperoni", "Anchovies"
    * Output: "Thanks, Dave. Your Pizza with Cheese, Pepperoni, and Anchovies should be ready soon!"

* - The program calculates and returns a price based on the amound of toppings, with cheese not counting as an extra topping.
    * Input: "Dave", "Cheese", "Pepperoni", "Anchovies"
    * Output: "Thanks, Dave. Your 2 topping pizza with Cheese, Pepperoni, and Anchovies will cost $14.00. Your order should be ready soon!

* - The program has capabilities to handle multiple different pizzas, calculating total cost upon order
    * Input: "Dave", '"Cheese", "Pepperoni", "Anchovies", 1', '"Cheese", "Sausage", 2'
    * Output: "Thanks, Dave. Your 2 pizzas (Cheese, Pepperoni, Anchovies) and (Cheese, Sausage) will cost $26.00. Your order should be ready soon!


* - As the user orders, they should be able to click on a list of their pizzas to see details, and delete a pizza if desired.
    * Input: "Pizza 1" on click
    * Output: "Cheese, Pepperoni, Anchovies" - "Delete?"

* - The program deletes pizzas upon click of the delete button.
  * Input: "Cheese, Pepperoni, Anchovies" - "Delete?"  -- on click
  * Output: "pizza 1 - deleted"

* - The program gives a brief congratulations upon order of 5 pizzas
  * Input: "Dave", '"Cheese", "Pepperoni", "Anchovies", 1', '"Cheese", "Sausage", 2', '"Cheese", "Bell Pepper", 3', '"Cheese", "Onion", "Olive", 4', '"Cheese" 5'
  * Output: "Ayy, you order 5 pizzas! Our Lord, the God of Zah, thanks you!"



## Access to Website

_https://djzevenbergen.github.io/pizza-parlor_

## License

Copyright © 2020

**_DJ Zevenbergen_**