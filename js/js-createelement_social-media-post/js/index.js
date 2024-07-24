console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

function createSocialMediaPost(username, textContent) {
  const post = document.createElement("article");
  post.classList.add("post");

  const textElement = document.createElement("p");
  textElement.classList.add("post__content");
  textElement.textContent = textContent;

  const footer = document.createElement("footer");
  footer.classList.add("post__footer");

  const usernameElement = document.createElement("span");
  usernameElement.classList.add("post__username");
  usernameElement.textContent = `@${username}`;

  const likeButton = document.createElement("button");
  likeButton.classList.add("post__button");
  likeButton.textContent = "♥ Like";
  likeButton.setAttribute("data-js", "like-button");

  likeButton.addEventListener("click", handleLikeButtonClick);

  footer.appendChild(usernameElement);
  footer.appendChild(likeButton);

  post.appendChild(textElement);
  post.appendChild(footer);

  return post;
}

document.addEventListener("DOMContentLoaded", () => {
  const secondPost = createSocialMediaPost(
    "new_user",
    "Some new content for the second post."
  );
  document.body.appendChild(secondPost);
});
