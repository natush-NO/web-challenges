import styled from "styled-components";

export const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;

export const StyledDiv = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid var(--color-granite);
  border-radius: 4px;
`;

export const StyledTextarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid var(--color-granite);
  border-radius: 4px;
  resize: vertical;
`;
