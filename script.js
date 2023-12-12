console.log("Welcome to DOM Skill-Base Assissment")
/**
 * /** ------Project Objectives:------*\
 
- This project is to demonstrate my ability to use DOM properties, methods, and techniques to create a web application that provides a dynamic user experience, facilitate creation of a dynamic web application.
- Demonstrate proficiency with event-driven programming and DOM events.
- Implement basic form validation using any combination of built-in HTML validation attributes and DOM-event-driven JavaScript validation.

 * /** ------Project Goal:------*\

- Create a small single-page web application

- Keep in mind:: User experience is one of the most important aspects of successful web design. If users enjoy their time on with your application, they are more likely to trust whatever services or information you offer, and more likely to come back and use the application again in the future.

- Ensure that your application meets the absolute minimums requirements listed before attempting to further expand your features.
(finish the requirements first then go beyond the scope)
 */

const body = document.body;
const divEl = document.createElement("div");
const h1El = document.createElement("h1");
const pEl = document.createElement("p");
const btnEl = document.createElement("button")

h1El.textContent = "Welcome to DOM Module Project";

body.appendChild(pEl).textContent = "Please Create an account";
btnEl.textContent = "Start the game";
body.appendChild(btnEl).setAttribute("id","play")
body.appendChild(divEl).setAttribute("id", "app")

const app = document.getElementById("app");



// const userInput = prompt("Hey there! Please Type Your Name")

