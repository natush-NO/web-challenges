console.clear();

import Circle from "./components/Circle/Circle";
import Square from "./components/Square/Square";
import Pentagon from "./components/Pentagon/Pentagon";

const root = document.getElementById("root");

const circleElement = Circle();
const squareElement = Square();
const pentagonElement = Pentagon();

root.append(circleElement, squareElement, pentagonElement);
