import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: "1", name: "Living Room", isOn: false },
    { id: "2", name: "Kitchen", isOn: false },
    { id: "3", name: "Bedroom", isOn: false },
    { id: "4", name: "Bathroom", isOn: false },
    { id: "5", name: "Garage", isOn: false },
    { id: "6", name: "Porch", isOn: false },
    { id: "7", name: "Garden", isOn: false },
    { id: "8", name: "Office", isOn: false },
  ]);

  function toggleLight(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function toggleAllLights(isOn) {
    setLights(lights.map((light) => ({ ...light, isOn })));
  }

  const countOnLights = lights.filter((light) => light.isOn).length;

  return (
    <Layout isDimmed={lights.every((light) => !light.isOn)}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={toggleLight}
        toggleAllLights={toggleAllLights}
        countOnLights={countOnLights}
      />
    </Layout>
  );
}
