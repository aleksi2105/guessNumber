'use strict';

function startGame() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 10;
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

    attempts--;

    if (userNumber < randomNumber) {
      alert(`Загаданное число больше, осталось попыток: ${attempts}`);
      if (attempts === 0) {
        if (confirm("Попытки закончились, хотите сыграть еще?")) {
          startGame();
        }
        return;
      }
      question();
      return;
    }
    if (userNumber > randomNumber) {
      alert(`Загаданное число меньше, осталось попыток: ${attempts}`);
      if (attempts === 0) {
        if (confirm("Попытки закончились, хотите сыграть еще?")) {
          startGame();
        }
        return;
      }
      question();
      return;
    }

    if (userNumber === randomNumber) {
      alert("Поздравляю, Вы угадали!!!");
      if (confirm("Хотите сыграть еще?")) {
        startGame();
      }
      return;
    }
  }
  question();
}
startGame();
