import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ toggleAllLights, lights }) {
  const allOn = lights.every((light) => light.isOn);
  const allOff = lights.every((light) => !light.isOn);

  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        toggleAllLights={toggleAllLights}
        allOn={allOn}
        allOff={allOff}
      />
    </>
  );
}
