// js/custom.js 파일

let user = document.querySelector("#user-input"),
  playButton = document.querySelector("#play-button"),
  resetButton = document.querySelector("#reset-button"),
  chance = document.querySelector("#chance-area"),
  resultA = document.querySelector("#result-area"),
  im;

let chances = 5;
let gameOver = false;
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

function play(event) {
  event.preventDefault();
  let userValue = parseInt(user.value);

  if (userValue < randomNum) {
    resultA.textContent = "Up";
  } else if (userValue > randomNum) {
    resultA.textContent = "Down";
  } else if (userValue === randomNum) {
    resultA.textContent = "당첨입니다";
  }

  chances--;
  chance.textContent = `남은 기회: ${chances}`;

  if (chances < 1) {
    gameOver = true;
    playButton.disabled = true;
  }
}

function reset() {
  user.value = "";
  chances = 5;
  chance.textContent = `남은 기회: ${chances}`;
  playButton.disabled = false;
  resultA.textContent = "";

  randomNum = Math.floor(Math.random() * 100) + 1;
  console.log(randomNum);
}
user.addEventListener("focus", () => {
  user.value = "";
});
// function randomNum() {
//   computerNum = Math.floor(Math.random() * 100) + 1;
//   console.log(computerNum);
// }
// randomNum();

// play.addEventListener("click", (event) => {
//   e.preventDefault();
//   let user = user.value;
// });

// let re =
//   computerNum > userNum ? "up" : computerNum < userNum ? "down" : "bingo";
// result.indrText = re;
