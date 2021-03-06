import styled, { css } from 'styled-components';

const chunk = css`
  position: relative;
  min-width: 2em;
  color: white;
  white-space: nowrap;
  background: none;

  &:hover {
    cursor: pointer;
    color: #ffd700;

    svg > path {
      fill: #ffd700;
    }
  }

  @media (min-width: 767px) {
    width: 20%;
    img {
      width: 1.5em;
    }
  }

  svg > path {
    transition: .2s;
    -webkit-transition: .2s;
  }
`;

const Wrapper = styled.div`
  ${chunk}
`;

export default Wrapper;
