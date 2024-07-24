import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      {}
      <Sum valueA={5} valueB={10} />

      {}
      <Greeting name="Nataliia" age={30} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;

  return (
    <h1>
      {valueA} + {valueB} = {sum}
    </h1>
  );
}

// ======================

function Greeting({ name, age }) {
  return (
    <p>
      Hello, {name}. I am {age} years old.
    </p>
  );
}
