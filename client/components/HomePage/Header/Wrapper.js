import styled from 'styled-components';

import Background from './images/mobile-background.jpg';
import DesktopBackground from './images/background.jpg';

const Wrapper = styled.div`
  position: relative;
  margin-top: 78px;
  width: 100%;
  background: url(${Background}) no-repeat;
  background-size: 100%;

  @media (min-width: 769px) {
    margin: 0;
    background: url(${DesktopBackground}) no-repeat;
    background-size: 150%;
  }

  @media (min-width: 1300px) {
    background: url(${DesktopBackground}) no-repeat;
    background-size: 100%;
  }
`;

export default Wrapper;
