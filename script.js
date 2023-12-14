console.log("Welcome to DOM End of Module SBA");
let moves = 0,
    winCount = 0;
  let cards;
  let interval;
  let firstCard = false;
  let secondCard = false;
  let sec = 0, min = 0;

const h1El = document.createElement("h1");
const pEl = document.createElement("p");
const btnEl = document.createElement("button");
//Welcome Page
h1El.textContent = "Welcome to Memory Card Matching Project";
document.body.prepend(h1El);

//FridgeItems for the game
const fridgeItems = [
  { name: "Apple", src: "images/Apple.PNG" },
  { name: "Avocado", src: "images/Avocado.PNG" },
  { name: "Banana", src: "images/Banana.PNG" },
  { name: "Beef", src: "images/Beef.PNG" },
  { name: "Broccoli", src: "images/Broccoli.PNG" },
  { name: "Cabbage", src: "images/Cabbage.PNG" },
  { name: "Carrot", src: "images/Carrot.PNG" },
  { name: "Cheese", src: "images/Cheese.PNG" },
  { name: "Cherry", src: "images/Cherry.PNG" },
  { name: "ChikenWings", src: "images/ChikenWings.PNG" },
  { name: "Corn", src: "images/Corn.PNG" },
  { name: "Couliflower", src: "images/Couliflower.PNG" },
  { name: "Crab", src: "images/Crab.PNG" },
  { name: "Drinks", src: "images/Drinks.PNG" },
  { name: "Eggs", src: "images/Eggs.PNG" },
  { name: "Garlic", src: "images/Garlic.PNG" },
  { name: "Grape", src: "images/Grape.PNG" },
  { name: "Ham", src: "images/Ham.PNG" },
  { name: "kiwi", src: "images/kiwi.PNG" },
  { name: "Lemon", src: "images/Lemon.PNG" },
  { name: "Lettuce", src: "images/Lettuce.PNG" },
  { name: "Onion", src: "images/Onion.PNG" },
  { name: "Orange", src: "images/Orange.PNG" },
  { name: "Peach", src: "images/Peach.PNG" },
  { name: "Pear", src: "images/Pear.PNG" },
  { name: "Pineapple", src: "images/Pineapple.PNG" },
  { name: "Potato", src: "images/Potato.PNG" },
  { name: "Salmon", src: "images/Salmon.PNG" },
  { name: "Shrimp", src: "images/Shrimp.PNG" },
  { name: "Steak", src: "images/Steak.PNG" },
  { name: "Strowberry", src: "images/Strowberry.PNG" },
  { name: "SweetPotato", src: "images/SweetPotato.PNG" },
  { name: "Tomato", src: "images/Tomato.PNG" },
  { name: "Turkey", src: "images/Turkey.PNG" },
  { name: "Watermelon", src: "images/Watermelon.PNG" },
  { name: "Yogurt", src: "images/Yogurt.PNG" },
]; // console.log(fridgeItems.length, fridgeItems);//itms are checked in the img folder

//the app container:
const app = document.getElementById("app");

let startBtn = btnEl;
startBtn.textContent = "Start the game";
app.appendChild(startBtn);
pEl.textContent =
  "Come join the fun with my Memory Matching game! Jump right in and give it a try!";
app.prepend(pEl);

//handle user requist starting the game
startBtn.addEventListener("click", handleClick);
//Click event handler
function handleClick(event) {
  //prevent bubbling
  event.stopPropagation();
  //explicitly handle event by preventing its default actions
  event.preventDefault();
  userInput = prompt("Hey! there, Please Enter Your Name") || "User";
  h1El.textContent = `Welcome ${userInput}!`;
  //start the game (ease-out)
  startGame();
}
// _________________________________

function gameLayout(){
app.innerHTML = `<div class="stats">
  <div id="movesCount">Moves: 0</div>
  <div id="time"></div>
</div>
<div id="gameContainer"></div>
<button id="stop">Stop Game</button>`;
}


//creation of time element:
const timeEl = document.getElementById("time");
// time Logic
const timer = () => {
  sec += 1;
  if (sec >= 60) {
    min += 1;
    sec = 0;
  }
  //time format
  let seconds = (sec < 10) ? `0${sec}` : sec;
  let minutes = (min < 10) ? `0${min}` : min;
  timeEl.textContent = `Timer ${minutes}:${seconds}`;
};

//handling moves:
const movesEl = document.getElementById("movesCount");
const movesCounter = () => {
  moves += 1;
  movesEl.textContent = `Moves: ${moves}`;
};

//Generate cards
function cardsGenerator(size = 4) {
  // store original Array
  const tempArray = [...fridgeItems];
  let generatedCards = [];
  size = (size * size) / 2;
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    generatedCards.push(tempArray[randomIndex]);
    tempArray.splice(randomIndex, 1);
  }
  return generatedCards;
}

//Game Generator:
const matrixGenerator = (generatedCards, size = 4) => {
    let gameContainer = document.getElementById("gameContainer");
  gameContainer.textContent = "";
  let gameCards = [...generatedCards, ...generatedCards];

  //Cards shuffling
  gameCards.sort(() => 0.5 - Math.random());

  //grid (card spread) generation

  for (let i = 0; i < size * size; i++) {
    gameContainer.innerHTML += `<div class="cardContainer" data-card-value="${gameCards[i].name}">
        <div class="cardBack">?</div>
        <div class="cardFront"><img src ="${gameCards[i].src}" class="image"/></div>
    </div>`;
  }
  //grid
  gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;

  //cards
  cards = document.querySelectorAll(".card-container");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      //if selected is aleardy matched then ignore it
      if (!card.classList.contains("matched")){
        card.classList.add("flipped");
        if (!firstCard) {
          // the user selected the first card
          firstCard = card;
          firstCardValue = card.getAttribute("data-card-value");
        } else {
          // the use selected the second card
          movesCounter();
          secondCard = card;
          secondCardValue = card.getAttribute("data-card-value");
          if (firstCardValue == secondCardValue) {
            //if the cards matched should be ignored..
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            //initiat first card
            firstCard = false;
            //a win
            winCount++;
            if (winCount === Math.floor(generatedCards.length / 2)) {
              result.innerHTML = `<h2> You Won </h2>
                    <h4>moves: ${moves}</h4>`;
              stopGame();
            }
          } else {
            //if the card don't match
            let [tempFirst, tempSecond] = [firstCard, secondCard];
            firstCard = false;
            secondCard = false;
            setTimeout(() => {
              tempFirst.classList.remove("flipped");
              tempSecond.classList.remove("flipped");
            }, 900);
          }
        }
      }
    });
  });
};

// Initialize the game
const initializer = () => {
    gameLayout()
  moves = 0;winCount = 0;
  firstCard = false; secondCard = false;
  sec = 0; min = 0;
  h1El.textContent ="";
  stopBtn.classList.remove("hide");
  startBtn.classList.add("hide");
};

// // start the game
function startGame() {
  initializer();
  let generatedCards = cardsGenerator();
  // show generated cards
  console.log(generatedCards);
  matrixGenerator(generatedCards);
  interval = setInterval(timer, 1000);
  
}

let stopBtn = btnEl;
// stop the game
function stopGame() {
  h1El.textContent = "Thank you!!";
  pEl.textContent = "That Was fun, right? Play again...";
  app.appendChild(pEl);
  stopBtn.classList.add("hide");
  startBtn.classList.remove("hide");
  clearInterval(interval);
}
