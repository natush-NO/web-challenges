import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: "banana", name: "🍌 banana", color: "yellow" },
    { id: "orange", name: "🍊 orange", color: "orange" },
    { id: "kiwi", name: "🥝 kiwi", color: "green" },
    { id: "strawberry", name: "🍓 strawberry", color: "red" },
    { id: "blueberries", name: "🫐 blueberries", color: "lilac" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} />
      ))}
    </div>
  );
}
