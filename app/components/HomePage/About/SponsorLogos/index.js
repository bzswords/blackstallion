import React from 'react';
import Grid from 'grid-styled';

import TattooFlashCollective from 'components/HomePage/images/Tattooflash.png';
import KingPinLogo from 'components/HomePage/images/KingPinLogo.png';

import Wrapper from './Wrapper';
import SponsorLogo from './SponsorLogo';

function SponsorLogos() {
  return (
    <Wrapper>
      <Grid sm={1 / 2}>
        <SponsorLogo img={KingPinLogo} alt="King Pin Tattoo Supply" height={100} />
      </Grid>
      <Grid sm={1 / 2}>
        <SponsorLogo img={TattooFlashCollective} alt="Tatoo Flash Collective" height={70} />
      </Grid>
    </Wrapper>
  );
}

export default SponsorLogos;
