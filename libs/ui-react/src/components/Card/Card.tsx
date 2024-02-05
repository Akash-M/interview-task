import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiComponentsProps {}

const StyledUiComponents = styled.div`
  border: 1px solid grey;
  width: 250px;
`;

export function Card(props: UiComponentsProps) {
  return (
    <StyledUiComponents>
      Card Component
      {/*TODO: Implement component(s). */}
    </StyledUiComponents>
  );
}

export default Card;
