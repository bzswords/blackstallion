import styled, { css } from 'styled-components';

const chunk = css`
  background-color: ${(props) => props.background ? props.background : 'black'};
  padding: 2em 0.8em 2em 0.8em;

  @media (min-width: 1050px) {
    padding: 3em 0.5em 3em 0.5em;
  }
`;

const PageSection = styled.section`
  ${chunk}
`;

export default PageSection;
