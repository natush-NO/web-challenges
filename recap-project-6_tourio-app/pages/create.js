// pages/create.js
import Form from "../components/Form";

async function addPlace(data) {
  try {
    const response = await fetch("/api/places", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Place added:", result);
    } else {
      console.error("Failed to add place:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

export default function Create() {
  return (
    <div>
      <h1>Add a New Place</h1>
      <Form onSubmit={addPlace} />
    </div>
  );
}
