import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const PrimaryButton = styled(StyledButton)`
  color: #000;
  border-radius: 8px;
`;

export default StyledButton;
export { PrimaryButton };
