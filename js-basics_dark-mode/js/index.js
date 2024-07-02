console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkButton = document.querySelector("[data-js='dark-mode-button']");
const removeButton = document.querySelector("[data-js='light-mode-button']");
const togglerButton = document.querySelector('[data-js="toggle-button"]');

darkButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

removeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

togglerButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});
