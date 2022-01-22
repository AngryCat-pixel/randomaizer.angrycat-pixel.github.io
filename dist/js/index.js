let historyNumbers = [];
document.querySelector("#randomForm").addEventListener("submit", start);
let resultField = document.querySelector("#result");

function start(event) {
  try {
    event.preventDefault();
    historyNumbers = [];
    let formData = event.srcElement.elements;
    let randomNumbersArray = [];
    for (let index = 0; index < Number(formData.repeat.value); index++) {
      let randomNumber = getRandomInRange(
        Number(formData.from.value),
        Number(formData.to.value)
      );
      randomNumbersArray.push(randomNumber);
    }
    resultField.innerHTML = randomNumbersArray.join("\r\n");
  } catch (error) {
    resultField.textContent = "Невозможно сгенерировать числа без повторений.";
  }
}

/**
 * Генерирует случайное число от min до max включительно
 * @param {number} min - минимальное число в диапазоне
 * @param {number} max - максимальное число в диапазоне
 * @returns {number} возвращает случайное число из диапазона
 */
function getRandomInRange(min, max) {
  let result = false;
  for (let index = 0; result === false; index++) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!historyNumbers.includes(number)) {
      historyNumbers.push(number);
      result = number;
    } else if (index > 500) {
      throw new Error("Empty");
    }
  }
  while (result === false) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!historyNumbers.includes(number)) {
      historyNumbers.push(number);
      result = number;
    }
  }

  return result;
}
