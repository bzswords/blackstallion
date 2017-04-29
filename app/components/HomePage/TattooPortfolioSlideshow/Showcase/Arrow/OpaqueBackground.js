import styled from 'styled-components';

const OpaqueBackground = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: block;
    width: 100%;
    position: absolute;
    height: 100%;
    background-color: rgba(160, 160, 160, 0.7);
    z-index: 99;
  }
`;

export default OpaqueBackground;
