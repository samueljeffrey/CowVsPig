"use strict";

// VARIABLES

const body = document.querySelector("body");
const resetButton = document.querySelector(".reset-button");
const startButton = document.querySelector(".start-button");
const instructions = document.querySelector("h4");
const turnSign = document.querySelector("h2");
const players = ["Cow", "Pig"];
let currentPlayer;
let playCount = 0;

const img1 = document.querySelector(".sq1-img");
const img2 = document.querySelector(".sq2-img");
const img3 = document.querySelector(".sq3-img");
const img4 = document.querySelector(".sq4-img");
const img5 = document.querySelector(".sq5-img");
const img6 = document.querySelector(".sq6-img");
const img7 = document.querySelector(".sq7-img");
const img8 = document.querySelector(".sq8-img");
const img9 = document.querySelector(".sq9-img");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");

let animalNoise;
const fartNoise = new Audio("Fart.mp3");
const triumphNoise = new Audio("Triumph.mp3");

let taken1;
let taken5;
let taken9;



// STATES

const original = function() {
  body.style.background = "linear-gradient(to right, #9003fc, #fc0335)";
  resetButton.classList.add("button-disabled");
  startButton.classList.remove("button-disabled");
  turnSign.classList.add("hidden");
  instructions.classList.remove("hidden");
  img1.classList.add("hidden");
  img2.classList.add("hidden");
  img3.classList.add("hidden");
  img4.classList.add("hidden");
  img5.classList.add("hidden");
  img6.classList.add("hidden");
  img7.classList.add("hidden");
  img8.classList.add("hidden");
  img9.classList.add("hidden");
  img1.src = "";
  img2.src = "";
  img3.src = "";
  img4.src = "";
  img5.src = "";
  img6.src = "";
  img7.src = "";
  img8.src = "";
  img9.src = "";
  btn1.classList.add("hidden");
  btn2.classList.add("hidden");
  btn3.classList.add("hidden");
  btn4.classList.add("hidden");
  btn5.classList.add("hidden");
  btn6.classList.add("hidden");
  btn7.classList.add("hidden");
  btn8.classList.add("hidden");
  btn9.classList.add("hidden");
  playCount = 0;
  taken1 = false;
  taken5 = false;
  taken9 = false;
}

const winner = function() {
  btn1.classList.add("hidden");
  btn2.classList.add("hidden");
  btn3.classList.add("hidden");
  btn4.classList.add("hidden");
  btn5.classList.add("hidden");
  btn6.classList.add("hidden");
  btn7.classList.add("hidden");
  btn8.classList.add("hidden");
  btn9.classList.add("hidden");
  body.style.background = "linear-gradient(to right, #00d150, #a2ff30)";
  turnSign.textContent = `${currentPlayer} wins!`;
  triumphNoise.play();
}

const failed = function() {
  btn1.classList.add("hidden");
  btn2.classList.add("hidden");
  btn3.classList.add("hidden");
  btn4.classList.add("hidden");
  btn5.classList.add("hidden");
  btn6.classList.add("hidden");
  btn7.classList.add("hidden");
  btn8.classList.add("hidden");
  btn9.classList.add("hidden");
  body.style.background = "linear-gradient(to right, #8c2c00, #db5400)";
  turnSign.textContent = "Nobody wins!";
  fartNoise.play();
}

const switchPlayer = function() {
  animalNoise = new Audio(`${currentPlayer}.mp3`);
  animalNoise.play();
  currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
  turnSign.textContent = `${currentPlayer}'s turn`;
}

const check = function() {
  playCount++;
  if ((img1.src == img2.src && img1.src == img3.src && taken1)
      || (img1.src == img4.src && img1.src == img7.src && taken1)
      || (img5.src == img1.src && img5.src == img9.src && taken5)
      || (img5.src == img7.src && img5.src == img3.src && taken5)
      || (img5.src == img2.src && img5.src == img8.src && taken5)
      || (img5.src == img4.src && img5.src == img6.src && taken5)
      || (img9.src == img7.src && img9.src == img8.src && taken9)
      || (img9.src == img6.src && img9.src == img3.src && taken9)) {
    winner();
  } else if (playCount == 9) {
    failed();
  } else {
    switchPlayer();
  }
}



// ORIGINAL

original();



// BUTTONS

startButton.addEventListener("click", function() {
  startButton.classList.add("button-disabled");
  resetButton.classList.remove("button-disabled");
  currentPlayer = players[(Math.floor(Math.random()*2))];
  turnSign.textContent = `${currentPlayer}'s turn`;
  turnSign.classList.remove("hidden");
  instructions.classList.add("hidden");
  btn1.classList.remove("hidden");
  btn2.classList.remove("hidden");
  btn3.classList.remove("hidden");
  btn4.classList.remove("hidden");
  btn5.classList.remove("hidden");
  btn6.classList.remove("hidden");
  btn7.classList.remove("hidden");
  btn8.classList.remove("hidden");
  btn9.classList.remove("hidden");
})

resetButton.addEventListener("click", function() {
  original();
})



// GAMEPLAY

btn1.addEventListener("click", function() {
  btn1.classList.add("hidden");
  img1.classList.remove("hidden");
  img1.src = `${currentPlayer}.png`;
  taken1 = true;
  check();
})

btn2.addEventListener("click", function() {
  btn2.classList.add("hidden");
  img2.classList.remove("hidden");
  img2.src = `${currentPlayer}.png`;
  check();
})

btn3.addEventListener("click", function() {
  btn3.classList.add("hidden");
  img3.classList.remove("hidden");
  img3.src = `${currentPlayer}.png`;
  check();
})

btn4.addEventListener("click", function() {
  btn4.classList.add("hidden");
  img4.classList.remove("hidden");
  img4.src = `${currentPlayer}.png`;
  check();
})

btn5.addEventListener("click", function() {
  btn5.classList.add("hidden");
  img5.classList.remove("hidden");
  img5.src = `${currentPlayer}.png`;
  taken5 = true;
  check();
})

btn6.addEventListener("click", function() {
  btn6.classList.add("hidden");
  img6.classList.remove("hidden");
  img6.src = `${currentPlayer}.png`;
  check();
})

btn7.addEventListener("click", function() {
  btn7.classList.add("hidden");
  img7.classList.remove("hidden");
  img7.src = `${currentPlayer}.png`;
  check();
})

btn8.addEventListener("click", function() {
  btn8.classList.add("hidden");
  img8.classList.remove("hidden");
  img8.src = `${currentPlayer}.png`;
  check();
})

btn9.addEventListener("click", function() {
  btn9.classList.add("hidden");
  img9.classList.remove("hidden");
  img9.src = `${currentPlayer}.png`;
  taken9 = true;
  check();
})
