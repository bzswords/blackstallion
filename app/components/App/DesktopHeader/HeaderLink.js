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
    font-size: 0.9em;
  } 
`;

const propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
};

function HeaderLink(props) {
  const isActive = window.location.pathname === props.link;
  return (
    <A href={props.link} isActive={isActive} target={props.target}>
      {props.text}
    </A>
  );
}

HeaderLink.propTypes = propTypes;

HeaderLink.defaultProps = {
  link: '/',
  text: 'Placeholder',
  target: '_self',
};

export default HeaderLink;
