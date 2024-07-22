import React from "react";
import "./styles.css";

export default function App() {
  return (
    // <Button>
    <main>
      <Button>Hello</Button>
      <Button>It's</Button>
      <Button>MY</Button>
      <Button>Click me!</Button>
    </main>
    // </Button>
  );
}

function Button({ children }) {
  console.log(children);
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
