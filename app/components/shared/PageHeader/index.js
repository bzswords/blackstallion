import React, { PropTypes } from 'react';

import BackgroundImageSection from './../BackgroundImageSection';
import H1 from './H1';

const props = {
  mobileBackground: PropTypes.string.isRequired,
  desktopBackground: PropTypes.string.isRequired,
  backgroundSize: PropTypes.string,
  altText: PropTypes.string,
  title: PropTypes.string.isRequired,
}

function PageHeader(props) {
  return (
    <BackgroundImageSection {...props}>
      <H1 text={props.title} />
    </BackgroundImageSection>
  );
}

PageHeader.propTypes = props;

export default PageHeader;
