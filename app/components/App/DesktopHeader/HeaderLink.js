import React, { PropTypes } from 'react';
import styled from 'styled-components';

import NormalA from 'components/shared/A';

const A = styled(NormalA)`
  font-family: 'Work Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: ${(props) => props.isActive ? '#c3b158' : '#CBCBCC'};
  text-shadow: 2px 2px 5px black;
  font-size: 0.7em;

  &:hover {
    text-decoration: none;
  }

  @media (min-width: 1050px) {
    font-size: 1em;
  } 
`;

function HeaderLink({ link, text }) {
  const isActive = window.location.pathname === link;
  return (
    <A href={link} isActive={isActive}>
      {text}
    </A>
  );
}

HeaderLink.PropTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HeaderLink;
