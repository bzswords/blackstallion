import styled, { css } from 'styled-components';

import Background from './../../../assets/images/HomePage/Homepage-About.jpg';
import MobileBackground from './../../../assets/images/HomePage/mobile-homepage-about.jpg';

const chunk = css`
  position: relative;
  background: url(${MobileBackground}) no-repeat;
  background-size: 210%;

  @media (min-width: 600px) {
    background-size: 100%;
  }

  @media (min-width: 769px) {
    background: url(${Background}) no-repeat;
    background-size: 120%;
  }
`;

const Wrapper = styled.div`
  ${chunk}
`;

export default Wrapper;
