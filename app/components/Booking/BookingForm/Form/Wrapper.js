import styled from 'styled-components';

const Wrapper = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 40em;
  max-width: 100%;
  margin: auto;

  textarea {
    width: 100%;
    height: 10em;
    margin-bottom: 1em;
    padding: 0.8em 0.5em;
    background-color: #D9D9D9;
    border-radius: 5px;
  }

  input[type=text] {
    width: 100%;
    margin-bottom: 1em;
    padding-left: 0.5em;
    background-color: #D9D9D9;
    border-radius: 5px;
    height: 3em;
  }

  input[type=submit] {
    cursor: pointer;
    width: 8em;
    border: 2px solid #ffd700;
    color: #ffd700;
    font-size: 1.5em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    line-height: 2em;
    margin: 2em auto;
    margin-bottom: 0;

    &:hover {
      color: white;
      border-color: white;
    }
  }
`;

export default Wrapper;
