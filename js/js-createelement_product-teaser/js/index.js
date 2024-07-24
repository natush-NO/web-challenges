console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

function appendProductTeaser() {
  const article = document.createElement("article");
  article.classList.add("product");

  const body = document.createElement("div");
  body.classList.add("product__body");

  const textContainer = document.createElement("div");
  textContainer.classList.add("product__text-container");

  const productName = document.createElement("h2");
  productName.classList.add("product__name");
  productName.textContent = name;

  const categoriesList = document.createElement("ul");
  categoriesList.classList.add("product__categories");

  const categoryItems = [category1, category2, category3].map((category) => {
    const li = document.createElement("li");
    li.classList.add("product__category");
    li.textContent = category;
    return li;
  });

  categoriesList.append(...categoryItems);

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.classList.add("product__description");
  descriptionParagraph.textContent = description;

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("product__image-container");

  const productImage = document.createElement("img");
  productImage.classList.add("product__image");
  productImage.src = imageSrc;
  productImage.alt = "";

  const footer = document.createElement("footer");
  footer.classList.add("product__footer");

  const productPrice = document.createElement("span");
  productPrice.classList.add("product__price");
  productPrice.textContent = price;

  const buyButton = document.createElement("button");
  buyButton.classList.add("product__buy-button");
  buyButton.type = "button";
  buyButton.textContent = "Buy";

  textContainer.append(productName, categoriesList, descriptionParagraph);
  imageContainer.append(productImage);
  body.append(textContainer, imageContainer);
  footer.append(productPrice, buyButton);
  article.append(body, footer);

  document.body.appendChild(article);

  buyButton.addEventListener("click", () => {
    console.log(`Pressed Buy for product ${name} at price ${price}`);
  });
}

appendProductTeaser();
