import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

// Закоментуємо старий код
// const [coords, setCoords] = useState({
//   longitude: 0,
//   latitude: 0,
// });

// async function getISSCoords() {
//   try {
//     const response = await fetch(URL);
//     if (response.ok) {
//       const data = await response.json();
//       setCoords({ longitude: data.longitude, latitude: data.latitude });
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// useEffect(() => {
//   const timer = setInterval(() => {
//     getISSCoords();
//   }, 5000);

//   return () => {
//     clearInterval(timer);
//   };
// }, []);

const fetcher = (url) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = res.statusText;
      throw error;
    }
    return res.json();
  });

export default function ISSTracker() {
  const { data, error, isLoading, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  if (error) return <div>Failed to load data.</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
