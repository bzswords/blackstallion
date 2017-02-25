import styled, { css } from 'styled-components';

const chunk = css`
  background-color: ${(props) => props.background ? props.background : 'black'};
  padding: 0 0.5em 2em 0.5em;
`;

const PageSection = styled.section`
  ${chunk}
`;

export default PageSection;
