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

// document.addEventListener("DOMContentLoaded", function () {
//   const houseWhite = document.querySelector("[data-js='house-white']");
//   const houseBlack = document.querySelector("[data-js='house-black']");

//   houseWhite.addEventListener("click", () => {
//     houseBlack.classList.toggle("house-none");
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const houseBlack = document.querySelector("[data-js='house-black']");

//   houseBlack.addEventListener("click", () => {
//     houseBlack.classList.toggle("house-none");
//   });
// });

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
