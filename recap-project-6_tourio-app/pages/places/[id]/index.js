import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { StyledLink } from "../../components/StyledLink";

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
`;

export default function PlacePage() {
  const router = useRouter();
  const { id } = router.query;

  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (id) {
      async function fetchPlace() {
        const response = await fetch(`/api/places/${id}`);
        if (response.ok) {
          const data = await response.json();
          setPlace(data);
        } else {
          console.error("Failed to fetch place");
        }
      }

      fetchPlace();
    }
  }, [id]);

  async function deletePlace() {
    try {
      const response = await fetch(`/api/places/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.push("/");
      } else {
        console.error("Failed to delete place");
      }
    } catch (error) {
      console.error("Error deleting place:", error);
    }
  }

  if (!place) return <p>Loading...</p>;

  return (
    <>
      <h2>{place.name}</h2>
      <Link href="/" passHref legacyBehavior>
        <StyledBackLink>back</StyledBackLink>
      </Link>
      <button onClick={deletePlace}>Delete</button>
    </>
  );
}
