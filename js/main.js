'use strict';

function startGame() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  function question() {
    const userInput = prompt("Угадай число от 1 до 100");

    if (userInput === null) {
      alert("Игра окончена");
      return;
    }
    if (userInput.trim() === "") {
      alert("Введи число!");
      question();
      return;
    }
    const userNumber = Number(userInput);
    if (isNaN(userNumber)) {
      alert("Введи число!");
      question();
      return;
    }

    if (userNumber < randomNumber) {
      alert("Загаданное число больше");
      question();
      return;
    }
    if (userNumber > randomNumber) {
      alert("Загаданное число меньше");
      question();
      return;
    }

    if (userNumber === randomNumber) {
      alert("Поздравляю, Вы угадали!!!");
    }
  }
  question();
}
startGame();
