console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

// Початково приховуємо повідомлення про помилку
hideTosError();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Перевірка, чи відмічений чекбокс Умови обслуговування
  if (!tosCheckbox.checked) {
    // Якщо не відмічено, показуємо повідомлення про помилку і виходимо
    showTosError();
    return;
  }

  // Якщо відмічено, продовжуємо логіку відправлення форми

  // Показуємо повідомлення про успішне відправлення після форми
  successMessage.removeAttribute("hidden");

  // Скидаємо форму
  form.reset();

  // Фокусуємося на полі "Ім'я" після скидання форми
  form.querySelector('[name="firstName"]').focus();
});

// Додаткова логіка для зміни видимості повідомлення про помилку при зміні стану чекбоксу
tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError(); // Приховуємо повідомлення про помилку, якщо чекбокс відмічено
  } else {
    showTosError(); // Показуємо повідомлення про помилку, якщо чекбокс не відмічено
  }
});
