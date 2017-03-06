import styled from 'styled-components';

const Copyright = styled.span`
  font-family: 'Work Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  color: #BDBEBF;
  text-transform: uppercase;

  @media (min-width: 767px) {
    display: inline-block;
    position: absolute;
    left: 23em;
    bottom: 1.5em;
  }
`;

export default Copyright;
