import styled from 'styled-components';

import NormalA from 'components/shared/A';

const A = styled(NormalA)`
  padding: 1em 0 0.5em 0;

  @media (min-width: 767px) {
    padding: 1em 4em 1em 2em;
  }
`;

export default A;
