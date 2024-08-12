import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const fetcher = (url) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = res.statusText;
      throw error;
    }
    return res.json();
  });

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(
    id ? `https://swapi.dev/api/people/${id}` : null,
    fetcher
  );

  if (error) return <div>Failed to load data.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
