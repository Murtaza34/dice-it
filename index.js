const src1 = "./images/1.png";
const src2 = "./images/2.png";
const src3 = "./images/3.png";
const src4 = "./images/4.png";
const src5 = "./images/5.png";
const src6 = "./images/6.png";

const imgElementLeft = document.querySelector("#card-left img");
const imgElementRight = document.querySelector("#card-right img");

let srcValue = (imgElementLeft.src = `${src2}`);
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
  console.log(randomNumberLeft);
  console.log(randomNumberRight);

  if (randomNumberLeft === 1 && randomNumberRight === 1) {
    title.textContent = "Its a draw";
  }
}

handleButtonClick();



