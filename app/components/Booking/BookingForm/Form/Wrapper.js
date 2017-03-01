import styled from 'styled-components';

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  width: 80%;
  margin: auto;

  input[type=text] {
    width: 100%;
    margin-bottom: 1em;
    padding-left: 0.5em;
    background-color: #D9D9D9;
    border-radius: 5px;
    height: 3em;
  }

  input[type=submit] {
    width: 50%;
    border: 2px solid #ffd700;
    color: #ffd700;
    font-size: 1.5em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    line-height: 2em;
    margin-top: 1em;
  }
`

export default Wrapper;
