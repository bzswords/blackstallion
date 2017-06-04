import styled, { css } from 'styled-components';

const chunk = css`
  position: absolute;
  width: 100%;
  height: 100%;
  background: none;

  @media (min-width: 769px) {
    background: url(${(props) => props.desktopBackground}) no-repeat center;
  }
`;

const Background = styled.div`
  ${chunk}
`;

export default Background;
