function setRandomValue(nameOfAttribute) {
  let randomValue = Math.floor(Math.random() * 6) + 1;
  document.getElementById(nameOfAttribute).setAttribute("src", "images/dice"+ randomValue +".png");
  return randomValue;
}

let randomValue1 = setRandomValue("dice1");
let randomValue2 = setRandomValue("dice2");

let title = document.querySelector("h1");
if (randomValue1 > randomValue2) {
  title.innerText = "🚩 Player 1 Wins!";
} else if (randomValue1 < randomValue2) {
  title.innerText = "Player 2 Wins! 🚩";
} else {
  title.innerText = "Draw!";
}
