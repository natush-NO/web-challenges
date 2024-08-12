import styled from "styled-components";
import Link from "next/link";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <h1>React Data Fetching: Star Wars</h1>
      <List>
        <li>
          <StyledLink href="/characters/1">Luke Skywalker</StyledLink>
        </li>
        <li>
          <StyledLink href="/characters/2">C-3PO</StyledLink>
        </li>
        <li>
          <StyledLink href="/characters/3">R2-D2</StyledLink>
        </li>
        <li>
          <StyledLink href="/characters/4">Darth Vader</StyledLink>
        </li>
      </List>
    </Layout>
  );
}

const List = styled.ul`
  background-color: var(--color-light);
  list-style-type: none; /* Змінено на none для вимкнення стандартних маркерів */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-dark);
  padding: 0.5rem 1rem;
  border-radius: 3px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: var(
      --color-primary
    ); /* Додано для покращення взаємодії */
    color: var(--color-light); /* Змінює колір тексту при наведенні */
  }
`;
