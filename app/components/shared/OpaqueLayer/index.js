import styled from 'styled-components';

const OpaqueLayer = styled.div`
  background-color: ${props => props.backgroundColor || 'grey' };
  opacity: ${props => props.opacity || 0.7 };
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default OpaqueLayer;