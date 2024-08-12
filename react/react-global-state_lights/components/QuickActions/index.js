import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ toggleAllLights, allOn, allOff }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => toggleAllLights(false)}
        disabled={allOff}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => toggleAllLights(true)}
        disabled={allOn}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
