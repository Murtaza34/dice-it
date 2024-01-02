const imgElementLeft = document.querySelector("#card-left img");
const imgElementRight = document.querySelector("#card-right img");
const diceNumberLeft = document.querySelector("#dice-number-left");
const diceNumberRight = document.querySelector("#dice-number-right");
const start_message = document.querySelector("#start-message");
const draw_message = document.querySelector("#draw-message");
const left_arrow = document.querySelector("#left-arrow");
const right_arrow = document.querySelector("#right-arrow");

const title = document.querySelector("#title");
const button = document.querySelector("#roll-dice-btn");

/* --------------  ---------------- */
button.addEventListener("click", handleButtonClick);

function getRandomNum(sides) {
  return Math.floor(Math.random() * 6) + 1;
}

function hideContent() {
  start_message.style.visibility = "hidden";
  left_arrow.style.visibility = "hidden";
  draw_message.style.visibility = "hidden";
  right_arrow.style.visibility = "hidden";
}

function showContentOnDraw() {
  draw_message.style.visibility = "visible";
  right_arrow.style.visibility = "visible";
}

function handleButtonClick(e) {
  e.preventDefault();
  hideContent();
  const randomNumberLeft = getRandomNum(6);
  const randomNumberRight = getRandomNum(6);

  if (randomNumberLeft === randomNumberRight) {
    srcValue = imgElementLeft.src = `./images/${randomNumberLeft}.png`;
    srcValue = imgElementRight.src = `./images/${randomNumberRight}.png`;
    title.textContent = "Its a draw!";
    showContentOnDraw();
    diceNumberLeft.textContent = `${randomNumberLeft}`;
    diceNumberRight.textContent = `${randomNumberRight}`;
  } else if (randomNumberLeft >= randomNumberRight) {
    srcValue = imgElementLeft.src = `./images/${randomNumberLeft}.png`;
    srcValue = imgElementRight.src = `./images/${randomNumberRight}.png`;
    title.textContent = "Player 1 Wins!";
    hideContent();
    diceNumberLeft.textContent = `${randomNumberLeft}`;
    diceNumberRight.textContent = `${randomNumberRight}`;
  } else if (randomNumberLeft <= randomNumberRight) {
    srcValue = imgElementLeft.src = `./images/${randomNumberLeft}.png`;
    srcValue = imgElementRight.src = `./images/${randomNumberRight}.png`;
    title.textContent = "Player 2 Wins!";
    hideContent();
    diceNumberLeft.textContent = `${randomNumberLeft}`;
    diceNumberRight.textContent = `${randomNumberRight}`;
  }
}

handleButtonClick();
