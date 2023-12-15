# ------Project Objectives:------

 This project is to showcase utilization of DOM properties, methods, and techniques to create a web application that provides a dynamic user experience, demonstrate proficiency with event-driven programming.
 

# ------Project Goal:------

 * Create a small single-page web application that is user friendly 

 * Ensure that your application meets the absolute minimums requirements listed before attempting to further expand your features.

## Project link:
Github:

# My Project discription: 
This is a Memory game that is user frindly that requires the user to find the matched cards and keep track of the time and the number of trails. This game also provides the user the option to choose the level of difficulty and adjust the content accordingly.

## the project features:

#### I  ndex.html
The HTML file contains the web application layout that has dynamiccaly modified by the DOM.

#### Styles.css
The CSS file contains the HTML styling features and some were applied directly from the DOM.

#### Script.js
the javascript file contains the memory matching game implementation. It includes:
###### timeGenerator function:
This function generate a timer using setInterval() method
###### moves counter function:
This function increment the move counter when the player reveal two cards
###### win counter variable:
This variable stores the increments of win counter when the player reveal matched cards
###### start and stop game buttons
control the game using click events listeners
###### items Arry:
This variable stores cards for the game
###### Cards Generator:
This function pulls a random set of cards from Items Array using a dummy variable tempArray of a specific sise(I want to expand on this in the future to include level of difficulties)
###### matrixGenerator function:
This function duplicate the generated array of cards to make the grid of the game and controle the user actions by toggling flipped class between clicked cards and add matched class whenever the user finds a match among cards
###### result controls:
This element is shown with a congratulation when the user win