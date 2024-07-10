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
