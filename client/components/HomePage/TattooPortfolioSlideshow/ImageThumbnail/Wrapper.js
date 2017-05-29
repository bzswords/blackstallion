import styled, { css } from 'styled-components';

const chunk = css`
  background: url(${(props) => props.image.path}) no-repeat center;
  width: 20%;
  height: 4em;
  background-size: 150%;
  list-style: none;
  border: 1px solid white;
  border-left: 0;
  border-top: 0;

  &:hover {
    cursor: pointer;

    div {
      opacity: 0.3;
    }
  }

  @media (min-width: 769px) {
    width: 33.3%;
    height: 20%;
  }

  div {
    width: 100%;
    height: 100%;
    background-color: #c3b158;
    transition: .2s;
    -webkit-transition: .2s;
    opacity: ${(props) => props.selected ? '0.3' : '0'};
  }
`;

const Wrapper = styled.li`
  ${chunk}
`;

export default Wrapper;
