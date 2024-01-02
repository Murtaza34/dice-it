const imgElementLeft = document.querySelector("#card-left img");
const imgElementRight = document.querySelector("#card-right img");

const diceNumberLeft = document.querySelector("#dice-number-left");
const diceNumberRight = document.querySelector("#dice-number-right");

// srcValue = (imgElementLeft.src = `./images/1.png`);
// console.log(srcValue);

let title = document.querySelector("#title");
const button = document.querySelector("#roll-dice-btn");

/* --------------  ---------------- */
button.addEventListener("click", handleButtonClick);

// get random number between 1 - 6
function getRandomNum(sides) {
  return Math.floor(Math.random() * 6) + 1;
}

function handleButtonClick() {
  const randomNumberLeft = getRandomNum(6);
  const randomNumberRight = getRandomNum(6);
  // console.log(randomNumberLeft);
  // console.log(randomNumberRight);

  if (randomNumberLeft === randomNumberRight) {
    srcValue = imgElementLeft.src = `./images/${randomNumberLeft}.png`;
    srcValue = imgElementRight.src = `./images/${randomNumberRight}.png`;
    title.textContent = "Its a draw!";
    diceNumberLeft.textContent = `${randomNumberLeft}`;
    diceNumberRight.textContent = `${randomNumberRight}`;
  } else if (randomNumberLeft >= randomNumberRight) {
    srcValue = imgElementLeft.src = `./images/${randomNumberLeft}.png`;
    srcValue = imgElementRight.src = `./images/${randomNumberRight}.png`;
    title.textContent = "Player 1 Wins!";
    diceNumberLeft.textContent = `${randomNumberLeft}`;
    diceNumberRight.textContent = `${randomNumberRight}`;
  } else if (randomNumberLeft <= randomNumberRight) {
    srcValue = imgElementLeft.src = `./images/${randomNumberLeft}.png`;
    srcValue = imgElementRight.src = `./images/${randomNumberRight}.png`;
    title.textContent = "Player 2 Wins!";
    diceNumberLeft.textContent = `${randomNumberLeft}`;
    diceNumberRight.textContent = `${randomNumberRight}`;
  }
}

handleButtonClick();
