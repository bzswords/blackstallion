import React, { PropTypes } from 'react';

import BackgroundImageSection from './../BackgroundImageSection';
import H1 from './H1';

const propTypes = {
  mobileBackground: PropTypes.string.isRequired,
  desktopBackground: PropTypes.string.isRequired,
  backgroundSize: PropTypes.string,
  altText: PropTypes.string,
  title: PropTypes.string.isRequired,
};

function PageHeader(props) {
  return (
    <BackgroundImageSection
      mobileBackground={props.mobileBackground}
      desktopBackground={props.desktopBackground}
      backgroundSize={props.backgroundSize}
      altText={props.altText}
      title={props.title}
    >
      <H1 text={props.title} />
    </BackgroundImageSection>
  );
}

PageHeader.propTypes = propTypes;

export default PageHeader;
