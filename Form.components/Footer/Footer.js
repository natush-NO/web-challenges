// export function Footer() {
//   // Створюємо елементи футера
//   const footer = document.createElement("footer");
//   footer.classList.add("footer");
//   footer.setAttribute("role", "contentinfo");

//   const container = document.createElement("div");
//   container.classList.add("footer__container");

//   const images = document.createElement("div");
//   images.classList.add("footer__images");

//   const nav = document.createElement("nav");
//   nav.classList.add("footer__nav");

//   // Створюємо посилання з картинками
//   const linksData = [
//     {
//       href: "#",
//       class: "footer__link footer__link--house",
//       dataJs: "house-white",
//       imgSrc: "../../img/home_icon_white.png", // переконайтесь, що шлях правильний
//       imgAlt: "Haus",
//     },
//     {
//       href: "#",
//       class: "footer__link house-none footer__link--house",
//       dataJs: "house-black",
//       imgSrc: "../../img/home_icon_black_two.png", // додано ../../ для узгодження
//       imgAlt: "Haus",
//     },
//     {
//       href: "bookmarks.html",
//       class: "footer__link footer__link--bookmark",
//       dataJs: "bookmark-white",
//       imgSrc: "../../img/icon_bookmark_white.png", // додано ../../ для узгодження
//       imgAlt: "Bookmark",
//     },
//     {
//       href: "#",
//       class: "footer__link bookmark-none footer__link--bookmark",
//       dataJs: "bookmark-black",
//       imgSrc: "../../img/icon_bookmark_black.png", // додано ../../ для узгодження
//       imgAlt: "Bookmark",
//     },
//     {
//       href: "form.html",
//       class: "footer__link footer__link--plus",
//       dataJs: "plus-white",
//       imgSrc: "../../img/plus__icon_white.png", // додано ../../ для узгодження
//       imgAlt: "Plus icon",
//     },
//     {
//       href: "#",
//       class: "footer__link plus-none footer__link--plus",
//       dataJs: "plus-black",
//       imgSrc: "../../img/plus_icon_black.png", // додано ../../ для узгодження
//       imgAlt: "Plus icon",
//     },
//     {
//       href: "user.html",
//       class: "footer__link footer__link--user",
//       dataJs: "user-white",
//       imgSrc: "../../img/user_icon_white.png", // додано ../../ для узгодження
//       imgAlt: "Benutzer",
//     },
//     {
//       href: "#",
//       class: "footer__link user-none footer__link--user",
//       dataJs: "user-black",
//       imgSrc: "../../img/user_icon_black.png", // додано ../../ для узгодження
//       imgAlt: "Benutzer",
//     },
//   ];

//   linksData.forEach((linkData) => {
//     const link = document.createElement("a");
//     link.href = linkData.href;
//     linkData.class.split(" ").forEach((cls) => link.classList.add(cls)); // додано розділення класів
//     link.setAttribute("data-js", linkData.dataJs);

//     const img = document.createElement("img");
//     img.classList.add(`footer__${linkData.dataJs.replace(/-/g, "_")}`); // замінюємо всі дефіси
//     img.src = linkData.imgSrc;
//     img.alt = linkData.imgAlt;

//     link.appendChild(img);
//     nav.appendChild(link);
//   });

//   // Збираємо всі елементи разом
//   images.appendChild(nav);
//   container.appendChild(images);
//   footer.appendChild(container);

//   return footer;
// }

export function Footer() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.setAttribute("role", "contentinfo");

  footer.innerHTML = `
    <div class="footer__container">
      <div class="footer__images">
        <nav class="footer__nav">
          <a href="index.html" class="footer__link footer__link--house" data-js="house-white">
            <img class="footer__house_white" src="../../img/home_icon_white.png" alt="Haus">
          </a>
          <a href="#" class="footer__link house-none footer__link--house" data-js="house-black">
            <img class="footer__house_black" src="../../img/home_icon_black_two.png" alt="Haus">
          </a>
          <a href="bookmarks.html" class="footer__link footer__link--bookmark" data-js="bookmark-white">
            <img class="footer__bookmark_white" src="../../img/icon_bookmark_white.png" alt="Bookmark">
          </a>
          <a href="#" class="footer__link bookmark-none footer__link--bookmark" data-js="bookmark-black">
            <img class="footer__bookmark_black" src="../../img/icon_bookmark_black.png" alt="Bookmark">
          </a>
          <a href="#" class="footer__link footer__link--plus" data-js="plus-white">
            <img class="footer__plus_white" src="../../img/plus__icon_white.png" alt="Plus icon">
          </a>
          <a href="#" class="footer__link plus-none footer__link--plus" data-js="plus-black">
            <img class="footer__plus_black" src="../../img/plus_icon_black.png" alt="Plus icon">
          </a>
          <a href="user.html" class="footer__link footer__link--user" data-js="user-white">
            <img class="footer__user_white" src="../../img/user_icon_white.png" alt="Benutzer">
          </a>
          <a href="#" class="footer__link user-none footer__link--user" data-js="user-black">
            <img class="footer__user_black" src="../../img/user_icon_black.png" alt="Benutzer">
          </a>
        </nav>
      </div>
    </div>
  `;

  return footer;
}

// Додаємо футер до body при завантаженні сторінки
document.addEventListener("DOMContentLoaded", function () {
  document.body.appendChild(Footer());
});

// =================================================================
document.addEventListener("DOMContentLoaded", function () {
  const userWhite = document.querySelector("[data-js='plus-white']");
  const userBlack = document.querySelector("[data-js='plus-black']");

  // Перевірка стану при завантаженні сторінки
  const userState = localStorage.getItem("plusState");
  if (userState === "black") {
    userBlack.classList.remove("plus-none");
    userWhite.classList.add("plus-none");
  }

  userWhite.addEventListener("click", () => {
    userBlack.classList.remove("plus-none");
    userWhite.classList.add("plus-none");
    localStorage.setItem("plusState", "black"); // Зберігаємо стан в localStorage
  });

  userBlack.addEventListener("click", () => {
    userBlack.classList.add("plus-none");
    userWhite.classList.remove("plus-none");
    localStorage.setItem("plusState", "white"); // Зберігаємо стан в localStorage
  });
});
