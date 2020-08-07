let randomValue1 = Math.floor(Math.random() * 6) + 1;
let randomValue2 = Math.floor(Math.random() * 6) + 1;

let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");

dice1.setAttribute("src", "images/dice"+ randomValue1 +".png");
dice2.setAttribute("src", "images/dice"+ randomValue2 +".png");


let title = document.querySelector("h1");
if (randomValue1 > randomValue2) {
  title.innerText = "🚩 Player 1 Wins!";
} else if (randomValue1 < randomValue2) {
  title.innerText = "Player 2 Wins! 🚩";
} else {
  title.innerText = "Draw!";
}
