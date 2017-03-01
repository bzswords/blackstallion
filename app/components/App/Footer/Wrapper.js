import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  top: 0;
  width: 100%;
  padding: 1em 0;
  background-color: #000;
  z-index: 50;

  p {
    text-align: center;
  }
`;

export default Wrapper;