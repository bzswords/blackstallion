import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  position: relative;
  left: -50%;

  @media (min-width: 1050px) {
    left: 0;
    width: 120%;
  }

  @media (min-width: 1400px) {
    width: 150%;
  }
`;

export default Img;
