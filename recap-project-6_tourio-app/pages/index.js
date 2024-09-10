import styled from "styled-components";
import Card from "../components/Card";
import useSWR from "swr";
import Link from "next/link";
import { StyledLink } from "../components/StyledLink";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-left: 0;
`;

const ListItem = styled.li`
  position: relative;
  width: 100%;
`;

const FixedLink = styled(StyledLink)`
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

export default function Home() {
  const { data = [] } = useSWR("/api/places", { fallbackData: [] });

  return (
    <>
      <List role="list">
        {data.length > 0 ? (
          data.map((place) => (
            <ListItem key={place._id}>
              <Card
                name={place.name}
                image={place.image}
                location={place.location}
                id={place.id}
              />
            </ListItem>
          ))
        ) : (
          <p>No places available</p>
        )}
      </List>
      <Link href="/create" passHref legacyBehavior>
        <FixedLink>+ place</FixedLink>
      </Link>
    </>
  );
}
