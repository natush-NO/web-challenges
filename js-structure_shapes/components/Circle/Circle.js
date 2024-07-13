import getRandomColor from "../../utils/randomColor.js";

export function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = getRandomColor();
  });
  return circle;
}

const circleElement = Circle();

root.append(circleElement);

// ======================================================================

export const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  circle.style.backgroundColor = getRandomColor();
});
