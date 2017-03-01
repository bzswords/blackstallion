import styled, { css } from 'styled-components';

const chunk = css`
  position: relative;
  background: url(${(props) => props.background}) no-repeat;
  background-size: ${(props) => props.backgroundSize ? props.backgroundSize : '100%'}
  margin-top: 78px;

  @media (min-width: 769px) {
    margin-top: 0;
  }
`;

const BackgroundImageSection = styled.div`
  ${chunk}
`;

export default BackgroundImageSection;
