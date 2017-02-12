import React, { PropTypes } from 'react';

function SocialMediaLink({ src, href }) {
  return (
    <a href={href} target="_blank" >
      <img src={src} height="30" />
    </a>
  );
}

SocialMediaLink.propTypes = {
  src: PropTypes.string,
  href: PropTypes.string,
};

export default SocialMediaLink;