import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  height: 4.875em;
  padding: 0.5em 0 0.2em 0;
  background-color: #000;
  z-index: 101;
  border-bottom: ${(props) => props.menuOpen ? '1px solid white' : 'none'};

  @media (min-width: 769px) {
    display: none;
    visibility: hidden;
  }
`;

export default Wrapper;
