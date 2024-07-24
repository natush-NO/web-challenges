import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Article />
    </>
  );
}

function Article() {
  return (
    <article>
      <h2 className="article__title">JSX Wikipedia</h2>
      <label htmlFor="input"></label>
      <input id="input"></input>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/JSX_(JavaScript)"
      ></a>
    </article>
  );
}
