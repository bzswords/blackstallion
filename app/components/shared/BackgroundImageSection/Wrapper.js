import styled, { css } from 'styled-components';

const chunk = css`
  position: relative;
  margin-top: 78px;

  img {
    width: 100%;
  }

  @media (min-width: 769px) {
    margin-top: 0;
    background: url(${(props) => props.desktopBackground}) no-repeat;
    background-size: 100%;
  }
`;

const Wrapper = styled.div`
  ${chunk}
`;

export default Wrapper;
