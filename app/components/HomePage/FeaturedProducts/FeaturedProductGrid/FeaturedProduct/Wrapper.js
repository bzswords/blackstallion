import styled from 'styled-components';

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  p {
    width: 100%;
    max-width: 17em;
    text-decoration: none;
  }
`;

export default Wrapper;
