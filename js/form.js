document.addEventListener("DOMContentLoaded", function () {
  const plusWhite = document.querySelector("[data-js='plus-white']");
  const plusBlack = document.querySelector("[data-js='plus-black']");

  plusWhite.addEventListener("click", () => {
    plusBlack.classList.toggle("plus-none");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const pluskBlack = document.querySelector("[data-js='plus-black']");

  pluskBlack.addEventListener("click", () => {
    pluskBlack.classList.toggle("plus-none");
  });
});

//=================================================================

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('[data-js="form"]');
  const cardsContainer = document.getElementById("cards-container");

  function createCard(question, answer, tag) {
    const card = document.createElement("section");
    card.classList.add("card");

    const questionElement = document.createElement("h2");
    questionElement.classList.add("card__question");
    questionElement.textContent = question;

    const answerElement = document.createElement("p");
    answerElement.classList.add("card__answer");
    answerElement.textContent = answer;

    const tagElement = document.createElement("span");
    tagElement.classList.add("card__tag");
    tagElement.textContent = tag;

    card.appendChild(questionElement);
    card.appendChild(answerElement);
    card.appendChild(tagElement);

    return card;
  }

  function updateCharacterCount(textarea, counterElement) {
    const maxLength = parseInt(textarea.getAttribute("maxlength"), 10);
    const currentLength = textarea.value.length;
    const charactersLeft = maxLength - currentLength;
    counterElement.textContent = `There are no characters left: ${charactersLeft}`;
  }

  function initCharacterCounters() {
    const textareas = document.querySelectorAll(
      ".page__textarea-question, .page__textarea-answer"
    );

    textareas.forEach((textarea) => {
      const counter = document.createElement("span");
      counter.className = "page__counter";
      counter.textContent = `There are no characters left: ${textarea.maxLength}`;

      textarea.insertAdjacentElement("afterend", counter);

      textarea.addEventListener("input", function () {
        updateCharacterCount(textarea, counter);
      });
    });
  }

  initCharacterCounters();

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const question = document.getElementById("question").value;
    const answer = document.getElementById("answer").value;
    const tag = document.getElementById("tag-page").value;

    const newCard = createCard(question, answer, tag);

    cardsContainer.appendChild(newCard);

    form.reset();

    const counters = document.querySelectorAll(".page__counter");
    counters.forEach((counter) => {
      counter.textContent = `There are no characters left: ${counter.previousElementSibling.maxLength}`;
    });
  });
});
