// import { cards } from "../../untils/cards.js";
// import { Card } from "../Card/Card.js";

// export function Form() {
//   const form = document.createElement("form");
//   form.classList.add("form");
//   form.innerHTML = /* html */ `
// 		<label class="label" for="question">Your question:</label>
// 		<textarea
// 			id="question"
// 			// rows="7"
//       class="textarea"
// 			name="question"
// 			maxlength="150"
// 			data-js="input-question"
// 		></textarea>
// 		<span class="form__character-count">
// 			<span data-js="amount-left-question"></span> characters left
// 		</span>
// 		<label class="label" for="answer">Your answer:</label>
// 		<textarea
// 			id="answer"
//       class="textarea"
// 			rows="7"
// 			name="answer"
// 			maxlength="150"
// 			data-js="input-answer"
// 		></textarea>
// 		<span class="form__character-count">
// 			<span data-js="amount-left-answer"></span> characters left
// 		</span>
// 		<label class="label" for="tags">Tags:</label>
// 		<input id="tags" type="text" name="tags" />
// 		<button class="form__submit-button" type="submit">Submit</button>
// 	`;

//   const formFields = form.querySelectorAll('[data-js="input"]');
//   console.log(formFields);
//   const counterOutputs = form.querySelectorAll('[data-js="amount-left"]');

//   formFields.forEach((formField, index) => {
//     counterOutputs.forEach((output) => {
//       output.innerText = formField.maxLength;
//     });
//     formField.addEventListener("input", () => {
//       const currentAmountLeft = formField.maxLength - formField.value.length;
//       counterOutputs[index].innerText = currentAmountLeft;
//     });
//   });

//   form.addEventListener("submit", handleFormSubmit);

//   return form;
// }

// function handleFormSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.target);
//   const data = Object.fromEntries(formData);

//   const newCard = {
//     question: data.question,
//     answer: data.answer,
//     tags: data.tags.split("#", ","),
//     isBookmarked: false,
//   };

//   //  для додавання одного або кількох елементів в початок масиву і повертає нову довжину масиву після додавання.

//   cards.unshift(newCard);

//   // To prevent the need to rerender, we add the new card to the DOM directly
//   const cardList = document.querySelector(".card-list");
//   const newCardElement = Card(newCard);
//   cardList.prepend(newCardElement);

//   // event - це об'єкт події, який містить інформацію про саму подію.
//   // event.target - це елемент, на якому спрацювала подія (у цьому випадку, форма).
//   event.target.reset();
//   // .elements - це властивість, яка надає доступ до всіх елементів форми як колекції.
//   // .question - це ім'я елемента поля в формі. Тут ми використовуємо
//   //  .elements.question, щоб отримати доступ до конкретного поля форми за його іменем(ім'я "question" в цьому випадку).
//   //.focus() - це метод, який встановлює фокус введення на вказаному елементі. В даному випадку, після скидання форми до початкових значень, фокус встановлюється на поле форми з ім'ям "question". Це означає, що користувач буде готовий ввести нові дані у це поле, необхідне для подальшого використання
//   event.target.elements.question.focus();
// }
// ================
import { cards } from "../../untils/cards.js";
import { Card } from "../Card/Card.js";

export function Form() {
  const form = document.createElement("form");
  form.classList.add("form", "form__margin");
  form.innerHTML = /* html */ `
    <label class="label" for="question">Your question:</label>
    <textarea
      id="question"
      class="textarea"
      name="question"
      maxlength="150"
      data-js="input-question"
    ></textarea>
    <span class="form__character-count">
      <span data-js="amount-left-question"></span> characters left
    </span>
    <label class="label" for="answer">Your answer:</label>
    <textarea
      id="answer"
      class="textarea"
      rows="7"
      name="answer"
      maxlength="150"
      data-js="input-answer"
    ></textarea>
    <span class="form__character-count">
      <span data-js="amount-left-answer"></span> characters left
    </span>
    <label class="label" for="tags">Tags:</label>
    <input class="input" id="tags" type="text" name="tags" />
    <button class="form__submit-button" type="submit">Submit</button>
  `;

  const formFields = form.querySelectorAll('[data-js^="input"]');
  const counterOutputs = form.querySelectorAll('[data-js^="amount-left"]');

  formFields.forEach((formField, index) => {
    counterOutputs[index].innerText = formField.maxLength;

    formField.addEventListener("input", () => {
      const currentAmountLeft = formField.maxLength - formField.value.length;
      counterOutputs[index].innerText = currentAmountLeft;
    });
  });

  form.addEventListener("submit", handleFormSubmit);

  return form;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newCard = {
    question: data.question,
    answer: data.answer,
    tags: data.tags.split("#", ","),
    isBookmarked: false,
  };

  //  для додавання одного або кількох елементів в початок масиву і повертає нову довжину масиву після додавання.

  cards.unshift(newCard);

  // To prevent the need to rerender, we add the new card to the DOM directly
  const cardList = document.querySelector(".card-list");
  const newCardElement = Card(newCard);
  cardList.prepend(newCardElement);

  // event - це об'єкт події, який містить інформацію про саму подію.
  // event.target - це елемент, на якому спрацювала подія (у цьому випадку, форма).
  event.target.reset();
  // .elements - це властивість, яка надає доступ до всіх елементів форми як колекції.
  // .question - це ім'я елемента поля в формі. Тут ми використовуємо
  //  .elements.question, щоб отримати доступ до конкретного поля форми за його іменем(ім'я "question" в цьому випадку).
  //.focus() - це метод, який встановлює фокус введення на вказаному елементі. В даному випадку, після скидання форми до початкових значень, фокус встановлюється на поле форми з ім'ям "question". Це означає, що користувач буде готовий ввести нові дані у це поле, необхідне для подальшого використання
  event.target.elements.question.focus();
}
