import styled, { css } from 'styled-components';

const chunk = css`
  background: url(${(props) => props.image.path}) no-repeat;
  width: 20%;
  height: 4em;
  background-size: 150%;
  list-style: none;
  border: 1px solid white;
  border-left: 0;
  border-top: 0;

  @media (min-width: 768px) {
    width: 33.3%;
    height: 5em;
  }

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
