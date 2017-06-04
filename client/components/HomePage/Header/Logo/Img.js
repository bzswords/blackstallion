import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  position: relative;
  left: -50%;
  width: 100%;

  @media (min-width: 1050px) {
    left: 0;
  }
`;

export default Img;
