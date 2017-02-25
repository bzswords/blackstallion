import styled, { css } from 'styled-components';

import Background from 'components/HomePage/images/Homepage-About.jpg';

const chunk = css`
  position: relative;
  background: url(${Background}) no-repeat fixed top;
  padding: 0 0.5em 2em 0.5em;
`;

const Wrapper = styled.div`
  ${chunk}
`;

export default Wrapper;
