import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  h1 {
    max-width: 10em;
    text-shadow: 3px 3px 10px #222;
    white-space: normal;
    letter-spacing: 0.01em;
  }

  @media (min-width: 1050px) {
    h1 {
      letter-spacing: 0.1em;
      font-size: 2.5em;
    }
  }
`;

export default Wrapper;