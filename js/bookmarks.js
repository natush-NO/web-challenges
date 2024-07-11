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
document.addEventListener("DOMContentLoaded", function () {
  const bookmarkWhite = document.querySelector("[data-js='bookmark-white']");
  const bookmarkBlack = document.querySelector("[data-js='bookmark-black']");

  bookmarkWhite.addEventListener("click", () => {
    bookmarkBlack.classList.toggle("bookmark-none");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const bookmarkBlack = document.querySelector("[data-js='bookmark-black']");

  bookmarkBlack.addEventListener("click", () => {
    bookmarkBlack.classList.toggle("bookmark-none");
  });
});
