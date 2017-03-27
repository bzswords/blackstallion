import styled from 'styled-components';

const A = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  margin: auto;
  transition: .2s;
  -webkit-transition: .2s;

  &:hover {
    color: #c3b158;
    text-decoration: underline;
  }
`;

export default A;
