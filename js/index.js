console.clear();

document.addEventListener("DOMContentLoaded", function () {
  const bookmarkWhiteCard = document.querySelector(
    "[data-js='bookmark-white-card']"
  );
  const bookmarkBlackCard = document.querySelector(
    "[data-js='bookmark-black-card']"
  );

  bookmarkWhiteCard.addEventListener("click", () => {
    bookmarkBlackCard.classList.toggle("bookmark-black-card");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const bookmarkBlackCardToggle = document.querySelector(
    "[data-js='bookmark-black-card']"
  );

  bookmarkBlackCardToggle.addEventListener("click", () => {
    bookmarkBlackCardToggle.classList.toggle("bookmark-black-card");
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

document.addEventListener("DOMContentLoaded", function () {
  const houseWhite = document.querySelector("[data-js='house-white']");
  const houseBlack = document.querySelector("[data-js='house-black']");

  houseWhite.addEventListener("click", () => {
    houseBlack.classList.toggle("house-none");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const houseBlack = document.querySelector("[data-js='house-black']");

  houseBlack.addEventListener("click", () => {
    houseBlack.classList.toggle("house-none");
  });
});
