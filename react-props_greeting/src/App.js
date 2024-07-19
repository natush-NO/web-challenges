import React from "react";
import "./styles.css";

// Створення компонента Greeting
function Greeting({ name }) {
  // Рендеринг привітання з іменем
  return <h1>Hello, {name}!</h1>;
}

// Головний компонент App
export default function App() {
  return (
    <div>
      {/* Використання компонента Greeting з пропсом name */}
      <Greeting name="Lorenz" />
      <Greeting name="Daniel" />
      <Greeting name="Serco" />
    </div>
  );
}
