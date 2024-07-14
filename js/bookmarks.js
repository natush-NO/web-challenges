console.clear();

document.addEventListener("DOMContentLoaded", function () {
  const bookmarkWhiteCards = document.querySelectorAll(
    "[data-js='bookmark-white-card']"
  );
  const bookmarkBlackCards = document.querySelectorAll(
    "[data-js='bookmark-black-card']"
  );

  bookmarkWhiteCards.forEach((whiteCard, index) => {
    whiteCard.addEventListener("click", () => {
      bookmarkBlackCards[index].classList.toggle("bookmark-black-card");
    });
  });

  bookmarkBlackCards.forEach((blackCard) => {
    blackCard.addEventListener("click", () => {
      blackCard.classList.toggle("bookmark-black-card");
    });
  });
});

// ==============================================================================

document.addEventListener("DOMContentLoaded", function () {
  const buttonQuestion = document.querySelector("[data-js='button-question']");
  const buttonAnswer = document.querySelector("[data-js='button-answer']");

  buttonQuestion.addEventListener("click", () => {
    buttonAnswer.classList.toggle("hidden-button");
    buttonQuestion.classList.add("hidden-button");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttonQuestion = document.querySelector("[data-js='button-question']");
  const buttonAnswer = document.querySelector("[data-js='button-answer']");

  buttonAnswer.addEventListener("click", () => {
    buttonAnswer.classList.toggle("hidden-button");
    buttonQuestion.classList.toggle("hidden-button");
  });
});

// ==============================================================================
document.addEventListener("DOMContentLoaded", function () {
  const buttonQuestion = document.querySelector("[data-js='button-question']");
  const flexboxCard = document.querySelector("[data-js='flexbox-card']");

  buttonQuestion.addEventListener("click", () => {
    flexboxCard.style.backgroundColor = "#8cb5e6";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttonAnswer = document.querySelector("[data-js='button-answer']");
  const flexboxCard = document.querySelector("[data-js='flexbox-card']");

  buttonAnswer.addEventListener("click", () => {
    flexboxCard.style.backgroundColor = "";
  });
});

// ==============================================================================
// document.addEventListener("DOMContentLoaded", function () {
//   const bookmarkWhite = document.querySelector("[data-js='bookmark-white']");
//   const bookmarkBlack = document.querySelector("[data-js='bookmark-black']");

//   bookmarkWhite.addEventListener("click", () => {
//     bookmarkBlack.classList.toggle("bookmark-none");
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const bookmarkBlack = document.querySelector("[data-js='bookmark-black']");

//   bookmarkBlack.addEventListener("click", () => {
//     bookmarkBlack.classList.toggle("bookmark-none");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const bookmarkWhite = document.querySelector("[data-js='bookmark-white']");
  const bookmarkBlack = document.querySelector("[data-js='bookmark-black']");

  // Перевірка стану при завантаженні сторінки
  const bookmarkState = localStorage.getItem("bookmarkState");
  if (bookmarkState === "black") {
    bookmarkBlack.classList.remove("bookmark-none");
    bookmarkWhite.classList.add("bookmark-none");
  }

  bookmarkWhite.addEventListener("click", () => {
    bookmarkBlack.classList.remove("bookmark-none");
    bookmarkWhite.classList.add("bookmark-none");
    localStorage.setItem("bookmarkState", "black"); // Зберігаємо стан в localStorage
  });

  bookmarkBlack.addEventListener("click", () => {
    bookmarkBlack.classList.add("bookmark-none");
    bookmarkWhite.classList.remove("bookmark-none");
    localStorage.setItem("bookmarkState", "white"); // Зберігаємо стан в localStorage
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const houseWhite = document.querySelector("[data-js='house-white']");
//   const houseBlack = document.querySelector("[data-js='house-black']");

//   // Перевірка стану при завантаженні сторінки
//   const houseState = localStorage.getItem("houseState");
//   if (houseState === "black") {
//     houseBlack.classList.remove("house-none");
//     houseWhite.classList.add("house-none");
//   }

//   houseWhite.addEventListener("click", () => {
//     houseBlack.classList.remove("house-none");
//     houseWhite.classList.add("house-none");
//     localStorage.setItem("houseState", "black"); // Зберігаємо стан в localStorage
//   });

//   houseBlack.addEventListener("click", () => {
//     houseBlack.classList.add("house-none");
//     houseWhite.classList.remove("house-none");
//     localStorage.setItem("houseState", "white"); // Зберігаємо стан в localStorage
//   });
// });

// ===========================================================================
document.addEventListener("DOMContentLoaded", function () {
  const bookmarkWhite = document.querySelector("[data-js='bookmark-white']");
  const bookmarkBlack = document.querySelector("[data-js='bookmark-black']");

  // Перевірка стану при завантаженні сторінки
  const bookmarkState = localStorage.getItem("bookmarkState");
  if (bookmarkState === "black") {
    bookmarkBlack.classList.remove("bookmark-none");
    bookmarkWhite.classList.add("bookmark-none");
  }

  bookmarkWhite.addEventListener("click", () => {
    bookmarkBlack.classList.remove("bookmark-none");
    bookmarkWhite.classList.add("bookmark-none");
    localStorage.setItem("bookmarkState", "black"); // Зберігаємо стан в localStorage
  });

  houseBlack.addEventListener("click", () => {
    bookmarkBlack.classList.add("bookmark-none");
    bookmarkWhite.classList.remove("bookmark-none");
    localStorage.setItem("bookmarkState", "white"); // Зберігаємо стан в localStorage
  });
});
