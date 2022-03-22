import "./styles.scss";
import "./index.pug";

// Я не знал, как именно сделать запрос с сервера, его у меня нет. Пришлось обыграть это через console.log, надеюсь это подойдёт C:

// Преключение экрана ожидания на меню
const startButton = document.querySelector(".start-button");
const startWindow = document.querySelector('.atm__welcome');
const menuWindow = document.querySelector('.atm__menu');
const balance = document.querySelector('.menu__balance');
let balanceCount = 100000;

startButton.addEventListener("click", function () {
  startWindow.style.opacity = "0";
  startWindow.style.transition = "2s";

  setTimeout(function () {
    menuWindow.style.opacity = "1";
    menuWindow.style.transition = "2s";
    startWindow.style.display = "none";
    balance.innerHTML = `Ваш баланс: ${balanceCount} ₽`
  }, 1500);
});

// Переключение на экран снятия наличных
const menuButton = document.querySelector('.menu__button');
const menuBottom = document.querySelector('.menu__bottom');
const cashSection = document.querySelector('.cash');

menuButton.addEventListener("click", function () {
  menuBottom.style.opacity = "0";
  menuBottom.style.transition = "2s";
  menuButton.style.opacity = "0";
  menuButton.style.transition = "2s";

  setTimeout(function () {
    cashSection.style.opacity = "1";
    cashSection.style.transition = "2s";
    menuBottom.style.display = "none";
    menuButton.style.display = "none";

    output100.innerHTML = `x${banknotes[`${100}`]}`;
    output200.innerHTML = `x${banknotes[`${200}`]}`;
    output500.innerHTML = `x${banknotes[`${500}`]}`;
    output1000.innerHTML = `x${banknotes[`${1000}`]}`;
    output2000.innerHTML = `x${banknotes[`${2000}`]}`;
    output5000.innerHTML = `x${banknotes[`${5000}`]}`;
  }, 1500);
});

//Кнопки экрана снятия наличных
const cashClearButton = document.querySelector('.buttons__clear');
const cashConfirmButton = document.querySelector('.buttons__confirmation');
const cashInput = document.querySelector('.cash__input');

const output100 = document.querySelector('.output__100');
const output200 = document.querySelector('.output__200');
const output500 = document.querySelector('.output__500');
const output1000 = document.querySelector('.output__1000');
const output2000 = document.querySelector('.output__2000');
const output5000 = document.querySelector('.output__5000');
const cashText = document.querySelector('.available-nominal')

cashClearButton.addEventListener("click", function () {
  cashInput.value = '';
  cashText.style.color = 'black';
});

// Снятие наличных
cashConfirmButton.addEventListener("click", function () {
  cashText.innerHTML = 'Запрашиваю данные с сервера...';
  cashText.style.color = 'black';

  output100.innerHTML = `-`;
  output200.innerHTML = `-`;
  output500.innerHTML = `-`;
  output1000.innerHTML = `-`;
  output2000.innerHTML = `-`;
  output5000.innerHTML = `-`;

  setTimeout(function () {
    personWantGet(parseInt(cashInput.value), banknotes);
  }, 3000);
});

let banknotes = {
  5000: 10,
  2000: 10,
  1000: 10,
  500: 10,
  200: 10,
  100: 10
};

let personWantGet = (ammountNeeded, banknotes) => {
  let nominals = Object.keys(banknotes).map(Number).sort((a, b) => b - a);
  let sumOfBanknotes = () => {
    let sum = 0;
    for (let i = 0; i < nominals.length; i++) { 
      sum += nominals[i] * banknotes[`${nominals[i]}`];
      }
    return sum;
  }

  // Проверка возможности операции
  if (ammountNeeded < 99 || ammountNeeded % 100 !== 0 || typeof ammountNeeded !== 'number') {
    cashText.innerHTML = 'Введена неправильная сумма';
    cashText.style.color = 'red';
  } else if (ammountNeeded > balanceCount) {
    cashText.innerHTML = 'Недостаточно денег на счету';
    cashText.style.color = 'red';
  } else if (ammountNeeded > sumOfBanknotes()) {
    cashText.innerHTML = 'Недостаточно наличных для выдачи денег';
    cashText.style.color = 'red';
  } else {
    let operation = collectedSum(ammountNeeded, nominals);
    console.log(operation[100] === undefined)

    balance.innerHTML = `ВАШ БАЛАНС: ${balanceCount} ₽`;
    cashText.innerHTML = 'Выданные наличные';
    cashText.style.color = 'black';
    output100.innerHTML = `x${operation[100] === undefined ? 0 : operation[100]}`;
    output200.innerHTML = `x${operation[200] === undefined ? 0 : operation[200]}`;
    output500.innerHTML = `x${operation[500] === undefined ? 0 : operation[500]}`;
    output1000.innerHTML = `x${operation[1000] === undefined ? 0 : operation[1000]}`;
    output2000.innerHTML = `x${operation[2000] === undefined ? 0 : operation[2000]}`;
    output5000.innerHTML = `x${operation[5000] === undefined ? 0 : operation[5000]}`;

    // ПУНКТ 1 ЗАДАНИЕ 1 - ЗАПРОС С СЕРВЕРА
    console.log({ 'amount': ammountNeeded, 'banknotes': banknotes });
  }

  function collectedSum(amount, nominals) {
    if (amount === 0) return {}; // успеш - банкнот достаточно
    if (!nominals.length) {// ошибка - банкнот недостаточно
      cashText.innerHTML = 'Недостаточно наличных для выдачи денег';
      cashText.style.color = 'red';
      return {}
    };

    let currentNominal = nominals[0]; // Номинал в текущем проходе рекурсии
    let availableNotes = banknotes[currentNominal]; // Кол-во банкнот текущего номинала
    let notesNeeded = Math.floor(amount / currentNominal); // Сколько необходимо текущих банкнот
    let notesOutput = Math.min(availableNotes, notesNeeded); // Сколько банкнот выдано

    banknotes[currentNominal] -= notesOutput;
    balanceCount -= currentNominal * notesOutput;

    let result = collectedSum(amount - currentNominal * notesOutput, nominals.slice(1)); // Рекурсия по номиналам

    if (result) {
      return notesOutput ? { [currentNominal]: notesOutput, ...result } : result;
    }  
  };
};


// personWantGet(2, banknotes); // Введена неправильная сумма
// personWantGet(-2, banknotes); // Введена неправильная сумма
// personWantGet(102, banknotes); // Введена неправильная сумма
// personWantGet(-102, banknotes); // Введена неправильная сумма
// personWantGet(`999999999`, banknotes); // Введена неправильная сумма
// personWantGet(`-`, banknotes); // Введена неправильная сумма

// personWantGet(200000, banknotes); // Недостаточно денег на счету
// personWantGet(99999900, banknotes); // Недостаточно денег на счету
// personWantGet(100000, banknotes); // Недостаточно наличных для выдачи денег
// personWantGet(90000, banknotes); // Недостаточно наличных для выдачи денег

// personWantGet(100, banknotes); // успех
// personWantGet(1000, banknotes); // успех
// personWantGet(5000, banknotes);  // успех
// personWantGet(13000, banknotes);  // успех
// personWantGet(88000, banknotes);  // успех
// console.log(banknotes)