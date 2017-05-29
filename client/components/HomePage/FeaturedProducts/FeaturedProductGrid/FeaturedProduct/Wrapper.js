import styled from 'styled-components';

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  p {
    width: 100%;
    max-width: 17em;
  }
`;

export default Wrapper;
