import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Logo from 'assets/images/Logo-01.svg';

import NormalA from 'components/shared/A';

const A = styled(NormalA)`
  text-shadow: 2px 2px black;

  img {
    height: 60px;

    @media (min-width: 1220px) {
      height: 75px;
    }
  }

`;

function HeaderLogo({ link }) {
  return (
    <A href={link}>
      <img src={Logo} alt="Black Stallion Tattoo" />
    </A>
  );
}

HeaderLogo.PropTypes = {
  link: PropTypes.string.isRequired,
};

export default HeaderLogo;
