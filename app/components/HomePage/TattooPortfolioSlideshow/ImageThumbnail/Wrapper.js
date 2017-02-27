import styled, { css } from 'styled-components';

const chunk = css`
  background: url(${(props) => props.image.path}) no-repeat;
  width: 20%;
  height: 4em;
  background-size: 150%;
  list-style: none;
  border: 0.1em solid white;

  div {
    width: 100%;
    height: 100%;
    background-color: #c3b158;
    opacity: ${(props) => props.selected ? '0.3' : '0'};
  }
`;

const Wrapper = styled.li`
  ${chunk}
`;

export default Wrapper;