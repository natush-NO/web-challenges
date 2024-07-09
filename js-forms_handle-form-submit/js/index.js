console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Запобігаємо стандартній відправці форми

  // Отримання даних з форми
  const formData = new FormData(form);
  const formObject = {};

  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  // Виведення даних у консоль
  console.log(formObject);

  // Скидання форми
  form.reset();

  // Фокусування поля "Ім'я"
  form.querySelector('[name="firstName"]').focus();
});
