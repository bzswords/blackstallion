import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: left;
  padding: 0 1em 1em 1em;
  position: absolute;
  bottom: 0;

  h1, h3 {
    text-align: left;
  }
  h3, p {
    font-family: 'Work Sans';
  }
  h1 {
    letter-spacing: 0.1em;
  }
  h3 {
    margin-top: 1em;
    text-transform: capitalize;
  }

  @media (min-width: 767px) {
    right: 15%;
    bottom: 30%;

    h3 { font-size: 1.3em; }
    p { font-size: 1.3em; }
  }

  @media (min-width: 1200px) {
    right: 30%;
    bottom: 45%;
  }
`;

export default Wrapper;
