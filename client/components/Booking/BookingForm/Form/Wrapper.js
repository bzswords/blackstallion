import styled from 'styled-components';

const Wrapper = styled.div`
  width: 40em;
  max-width: 100%;
  margin: auto;
  text-align: center;

  form {
    width: 100%;
  }

  textarea {
    width: 100%;
    height: 10em;
    padding: 0.8em 0.5em;
    background-color: #D9D9D9;
    border-radius: 5px;
  }

  input[type=text] {
    width: 100%;
    padding-left: 0.5em;
    background-color: #D9D9D9;
    border-radius: 5px;
    height: 3em;
  }

  .form-control {
    margin-top: 1em;
  }

  .form-group:first-child .form-control {
    margin-top: 0;
  }

  p.help-block {
    font-family: 'Work Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    text-align: left;
    color: red;
    font-size: 0.8em;
  }

  .alert-danger {
    font-family: 'Work Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: white;
    margin-bottom: 1em;
    background-color: red;
    border-radius: 0.5em;
  }

  button {
    cursor: pointer;
    width: 8em;
    border: 2px solid #ffd700;
    background: none;
    color: #ffd700;
    font-size: 1.5em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    line-height: 2em;
    margin: 2em auto;
    margin-bottom: 0;
    transition: .2s;
    -webkit-transition: .2s;

    &:hover {
      color: white;
      border-color: white;
    }
  }

  .submitted {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 671px;
    color: #ffd700;
    font-family: 'Work Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

    span {
      font-family: 'Abril Fatface', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 2em;
    }
  }
`;

export default Wrapper;
