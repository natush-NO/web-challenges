import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Form from "../../components/Form";
import Link from "next/link";
import styled from "styled-components";
import { StyledLink } from "../../components/StyledLink";

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
`;

export default function EditPlacePage() {
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

  async function editPlace(updatedPlace) {
    try {
      const response = await fetch(`/api/places/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPlace),
      });

      if (response.ok) {
        router.push("/");
      } else {
        console.error("Failed to update place");
      }
    } catch (error) {
      console.error("Error updating place:", error);
    }
  }

  if (!place) return <p>Loading...</p>;

  return (
    <>
      <h2>Edit Place</h2>
      <Link href="/" passHref legacyBehavior>
        <StyledBackLink>back</StyledBackLink>
      </Link>
      <Form onSubmit={editPlace} formName={"edit-place"} defaultData={place} />
    </>
  );
}
