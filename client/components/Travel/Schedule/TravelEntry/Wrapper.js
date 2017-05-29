import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  margin-bottom: 1.5em;

  &:last-child {
    margin-bottom: 0;
  }

  div {
    color: white;
    &:first-child {
      color: #FFD700;
    }
  }
`;

export default Wrapper;
