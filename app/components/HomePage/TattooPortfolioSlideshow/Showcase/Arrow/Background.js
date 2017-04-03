import styled, { css } from 'styled-components';

const chunk = css`
  width: 100%;
  height: 100%;
  background: none;

  @media (min-width: 769px) {
    background: url(${(props) => props.desktopBackground}) no-repeat center;
    -webkit-filter: blur(4px);
    -moz-filter: blur(4px);
    -o-filter: blur(4px);
    -ms-filter: blur(4px);
    filter: blur(4px);
  }
`;

const Background = styled.div`
  ${chunk}
`;

export default Background;
