import styled, { css } from 'styled-components';

const chunk = css`
  background: url(${(props) => props.image.path}) no-repeat center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: 150%;

  &:hover {
    cursor: pointer;

    div {
      opacity: 0.3;
    }
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

const Wrapper = styled.div`
  ${chunk}
`;

export default Wrapper;
