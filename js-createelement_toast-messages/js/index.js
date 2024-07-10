console.clear();

// Отримуємо посилання на контейнер з повідомленнями тостів і кнопки
const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

// // Функція для створення нового елемента тоста
function createToastMessage() {
  //   // Створюємо новий елемент div з необхідним класом
  const toastMessage = document.createElement("li"); // створюємо <li> елемент
  toastMessage.classList.add("toast-container__message"); // додаємо клас для стилю
  //   // Додаємо текстовий контент (можна також додати інші елементи або дані)
  toastMessage.textContent = "This is a new toast message"; // текстовий контент

  toastContainer.appendChild(toastMessage); // додаємо елемент в контейнер
}

// Обробник для кнопки "Add toast message"
addButton.addEventListener("click", () => {
  createToastMessage();
});

// Обробник для кнопки "Clear all toast messages"
clearButton.addEventListener("click", () => {
  // Очищаємо HTML внутрішній вміст контейнера
  toastContainer.innerHTML = "";
});
