const movesCount = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let hOneEl = document.createElement("h1");

//
let cards;
let interval;
let firstCard = false;
let firstCardValue;
let secondCard = false;
let secondCardValue;


// initial time
let sec = 0,
  min = 0;
// initial moves
let moves = 0,
  winCount = 0;

// time Logic
const timeGenerator = () => {
  sec += 1;
  if (sec >= 60) {
    min += 1;
    sec = 0;
  }
  //time format
  let seconds = sec < 10 ? `0${sec}` : sec;
  let minutes = min < 10 ? `0${min}` : min;
  timeValue.textContent = `Time ${minutes}:${seconds}`;
};

//Calculating moves:
const movesCounter = () => {
  moves += 1;
  movesCount.textContent = `moves: ${moves}`;
};

const items = [
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

let size;
//choosing cards at random...
const cardsGenerator = (size = 4) => {
  // store original Array
  const tempArray = [...items];
  let generatedCards = [];
  //since a matched pair shoud exist the size doubles:
  size = (size * size) / 2;
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    generatedCards.push(tempArray[randomIndex]);
    tempArray.splice(randomIndex, 1);
  }
  return generatedCards;
};

//Game Generator:
const matrixGenerator = (generatedCards, size = 4) => {
  gameContainer.parentNode.style.backgroundColor ="#bde0fe";
  gameContainer.textContent = "";
  generatedCards = [...generatedCards, ...generatedCards];

  //Cards shuffling
  generatedCards.sort(() => 0.5 - Math.random());

  //grid (card spread) generation
  for (let i = 0; i < size * size; i++) {
    gameContainer.innerHTML += `<div class="card-container" data-card-value="${generatedCards[i].name}">
        <div class="card-before">?</div>
        <div class="card-after"><img src ="${generatedCards[i].src}" class="image"/></div>
    </div>`;
  }
  //grid
  gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;

  //cards
  cards = document.querySelectorAll(".card-container");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      //if selected matched ignore it
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
              result.innerHTML = `<h2>Congratulation! You Won </h2>
                    <h4>WohOo! completed in ${min} minutes and ${sec} seconds, with just ${moves} moves. </h4>`;
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
  result.textContent = "";
  winCount = 0;
  let generatedCards = cardsGenerator();
  // show generated cards
  console.log(generatedCards);
  matrixGenerator(generatedCards);
};

// start the game
startBtn.addEventListener("click", () => {

  let userName = prompt("Please Enter Your Name") || 'Player';
  hOneEl.textContent=`Welcome ${userName}!`;
  document.body.prepend(hOneEl)
  document.body.firstChild.style.textAlign="center";

  moves = 0;
  sec = 0;
  min = 0;
  movesCount.textContent = `moves: ${moves}`;
  timeValue.textContent = "Time 00:00";
//start time
interval = setInterval(timeGenerator, 1000);
  controls.classList.add("hide");
  stopBtn.classList.remove("hide");
  startBtn.classList.add("hide");
  initializer();
});
// stop game
stopBtn.addEventListener(
  "click",
  (stopGame = () => {
    controls.classList.remove("hide");
    stopBtn.classList.add("hide");
    startBtn.classList.toggle("hide");
    clearInterval(interval);
  })
);
