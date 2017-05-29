import React from 'react';
import Grid from 'grid-styled';

import TattooFlashCollective from './../../../../assets/images/HomePage/Tattooflash.png';
import KingPinLogo from './../../../../assets/images/HomePage/KingPinLogo.png';

import Wrapper from './Wrapper';
import SponsorLogo from './SponsorLogo';

function SponsorLogos() {
  return (
    <Wrapper>
      <Grid sm={1 / 2}>
        <SponsorLogo
          link="http://kingpintattoosupply.com/"
          img={KingPinLogo}
          alt="King Pin Tattoo Supply"
          height={100}
        />
      </Grid>
      <Grid sm={1 / 2}>
        <SponsorLogo
          link="https://www.tattooflashcollective.com/"
          img={TattooFlashCollective}
          alt="Tatoo Flash Collective"
          height={70}
        />
      </Grid>
    </Wrapper>
  );
}

export default SponsorLogos;
