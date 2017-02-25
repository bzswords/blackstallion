import styled from 'styled-components';

const Wrapper = styled.nav`
  position:absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: black;
  z-index: ${(props) => props.show ? 51 : 49};

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    height: 100%;
    max-width: 13em;
    padding: 0;
    margin: auto;

    li {
      a {
        font-family: 'Abril Fontface', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        color: #CBCBCC;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.1em;
      }
    }
  }

`;

export default Wrapper;
