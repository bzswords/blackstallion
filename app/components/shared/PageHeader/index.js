import React, { PropTypes } from 'react';

import BackgroundImageSection from './../BackgroundImageSection';
import H1 from './H1';

function PageHeader({ title, backgroundImage }) {
  return (
    <BackgroundImageSection background={backgroundImage}>
      <H1 text={title} />
    </BackgroundImageSection>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default PageHeader;
