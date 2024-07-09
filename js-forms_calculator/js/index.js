console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Отримання введених значень
  const numberA = parseFloat(form.querySelector('[name="numberA"]').value);
  const numberB = parseFloat(form.querySelector('[name="numberB"]').value);
  const operator = form.querySelector('[name="operator"]:checked').value;

  let result;

  // Виконання операції залежно від вибраного оператора
  switch (operator) {
    case "addition":
      result = add(numberA, numberB);
      break;
    case "subtraction":
      result = subtract(numberA, numberB);
      break;
    case "multiplication":
      result = multiply(numberA, numberB);
      break;
    case "division":
      result = divide(numberA, numberB);
      break;
    default:
      result = "Не вдалося обчислити"; // Якщо вибрано невідомий оператор
  }

  resultOutput.textContent = result;
});
