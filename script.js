console.log("Welcome to DOM Skill-Base Assissment")
/**
 * /** ------Project Objectives:------*\
 * 
 * This project is to showcase utilization of DOM properties, methods, and techniques to create a web application that provides a dynamic user experience, demonstrate proficiency with event-driven programming and DOM events, and implement user input validation using built-in HTML attributes and DOM-event-driven validation.
 * 
 * /** ------Project Goal:------*\
 * Create a small single-page web application
 * Keep in mind:: User experience is one of the most important aspects of successful web design. If users enjoy their time on with your application, they are more likely to trust whatever services or information you offer, and more likely to come back and use the application again in the future.
 * Ensure that your application meets the absolute minimums requirements listed before attempting to further expand your features.
(finish the requirements first then go beyond the scope)
 */

const body = document.body;
const divEl = document.createElement("div");
const h1El = document.createElement("h1");
const pEl = document.createElement("p");
const btnEl = document.createElement("button")


//Dynamic change of content that address the user
btnEl.textContent = "Start the game";
body.prepend(btnEl)
h1El.textContent = "Welcome to DOM Module Project";
body.prepend(h1El);


// const app = document.getElementById("app");
// //handle dynamic event delegation
// app.addEventListener('click', handleClick)

userInput = prompt ("Hey! there, Please Enter Your Name") || "World";

//     h1El.textContent = `Hello ${userInput}!`
// }

// const userInput = prompt("Hey there! Please Type Your Name")

//Fridge Items
const fridgeItems=[{name: 'Apple', src: 'images/Apple.PNG'},{name: 'Asparagus', src: 'images/Asparagus.PNG'},{name: 'Avocado', src: 'images/Avocado.PNG'},{name: 'Bacon', src: 'images/Bacon.PNG'},{name: 'BakingSoda', src: 'images/BakingSoda.PNG'},{name: 'Banana', src: 'images/Banana.PNG'},{name: 'Beef', src: 'images/Beef.PNG'}
,{name: 'Breads', src: 'images/Breads.PNG'},{name: 'Broccoli', src: 'images/Broccoli.PNG'},{name: 'Cabbage', src: 'images/Cabbage.PNG'},{name: 'Carrot', src: 'images/Carrot.PNG'},{name: 'Cheese', src: 'images/Cheese.PNG'},{name: 'Cherry', src: 'images/Cherry.PNG'}
,{name: 'ChikenLegs', src: 'images/ChikenLegs.PNG'},{name: 'ChikenWings', src: 'images/ChikenWings.PNG'},{name: 'Corn', src: 'images/Corn.PNG'},{name: 'Couliflower', src: 'images/Couliflower.PNG'},{name: 'Crab', src: 'images/Crab.PNG'},{name: 'Cucumber', src: 'images/Cucumber.PNG'},{name: 'Drinks', src: 'images/Drinks.PNG'},{name: 'Eggs', src: 'images/Eggs.PNG'},{name: 'EnergyBar', src: 'images/EnergyBar.PNG'},{name: 'Garlic', src: 'images/Garlic.PNG'},{name: 'Grape', src: 'images/Grape.PNG'},{name: 'Ham', src: 'images/Ham.PNG'},{name: 'kiwi', src: 'images/kiwi.PNG'},{name: 'Lemon', src: 'images/Lemon.PNG'},{name: 'Lettuce', src: 'images/Lettuce.PNG'},{name: 'Mushroom', src: 'images/Mushroom.PNG'},{name: 'Nuts', src: 'images/Nuts.PNG'},{name: 'Onion', src: 'images/Onion.PNG'},{name: 'Orange', src: 'images/Orange.PNG'},{name: 'Peach', src: 'images/Peach.PNG'},{name: 'Pear', src: 'images/Pear.PNG'},{name: 'Pepper', src: 'images/Pepper.PNG'},{name: 'Pineapple', src: 'images/Pineapple.PNG'},{name: 'Potato', src: 'images/Potato.PNG'},{name: 'Salad', src: 'images/Salad.PNG'},{name: 'Salmon', src: 'images/Salmon.PNG'},{name: 'Sausage', src: 'images/Sausage.PNG'},{name: 'Shrimp', src: 'images/Shrimp.PNG'},{name: 'Spinach', src: 'images/Spinach.PNG'},{name: 'Steak.PNG', src: 'images/Steak.PNG'},{name: 'Strowberry', src: 'images/Strowberry.PNG'},{name: 'SweetPotato', src: 'images/SweetPotato.PNG'},{name: 'Tomato', src: 'images/Tomato.PNG'},{name: 'Turkey', src: 'images/Turkey.PNG'},{name: 'Watermelon', src: 'images/Watermelon.PNG'},{name: 'Yogurt', src: 'images/Yogurt.PNG'}]

console.log(fridgeItems.length,fridgeItems)
