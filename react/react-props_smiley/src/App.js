import React from "react";
import "./styles.css";

function Smiley({ isHappy }) {
  return <div>{isHappy ? "😊" : "😢"}</div>;
}

export default function App() {
  return (
    <div>
      {}
      <Smiley isHappy={true} /> {}
      <Smiley isHappy={false} /> {}
    </div>
  );
}
