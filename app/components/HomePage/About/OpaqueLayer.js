import styled from 'styled-components';

const OpaqueLayer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(160, 160, 160, 0.4);
  padding: 2em 0.8em 2em 0.8em;
  @media (min-width: 1050px) {
    padding: 3em 0.5em 3em 0.5em;
  }
`;

export default OpaqueLayer;