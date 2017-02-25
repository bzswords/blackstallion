import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5em 0;

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
