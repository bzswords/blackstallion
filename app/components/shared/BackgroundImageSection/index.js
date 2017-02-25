import styled, { css } from 'styled-components';

const chunk = css`
  position: relative;
  background: url(${(props) => props.background}) no-repeat fixed top;
  background-size: ${(props) => props.backgroundSize ? props.backgroundSize : '200%'}
`;

const BackgroundImageSection = styled.div`
  ${chunk}
`;

export default BackgroundImageSection;
