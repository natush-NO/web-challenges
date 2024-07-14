import { Form } from "../Form.components/Form/Form.js";

document.addEventListener("DOMContentLoaded", function () {
  const userWhite = document.querySelector("[data-js='user-white']");
  const userBlack = document.querySelector("[data-js='user-black']");

  // Перевірка стану при завантаженні сторінки
  const userState = localStorage.getItem("userState");
  if (userState === "black") {
    userBlack.classList.remove("user-none");
    userWhite.classList.add("user-none");
  }

  userWhite.addEventListener("click", () => {
    userBlack.classList.remove("user-none");
    userWhite.classList.add("user-none");
    localStorage.setItem("userState", "black"); // Зберігаємо стан в localStorage
  });

  userBlack.addEventListener("click", () => {
    userBlack.classList.add("user-none");
    userWhite.classList.remove("user-none");
    localStorage.setItem("userState", "white"); // Зберігаємо стан в localStorage
  });
});

// ==========================================================================================

// function updateQuestionCounter() {
//   const counterNumber = document.querySelector("[data-js='counter-number']");
//   const currentCount = parseInt(counterNumber.textContent);
//   counterNumber.textContent = currentCount + 1;
// }
