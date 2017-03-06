import styled from 'styled-components';

const Wrapper = styled.footer`
  position: relative;
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

  img {
    height: 3em;
  }

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: flex-start;

    a {
      order: -1;
      margin: 0;
    }

    > div {
      justify-content: space-between;
      align-items: center;
      max-width: 18em;

      a {
        width: 2.5em;
      }
    }

    img {
      height: 5em;
    }
  }
`;

export default Wrapper;
