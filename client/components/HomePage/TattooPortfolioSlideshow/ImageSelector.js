import React, { PropTypes } from 'react';
import styled from 'styled-components';

import ImageThumbnail from './ImageThumbnail';

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  border: 1px solid white;
  border-top: 0;
  border-bottom: 0;


  @media (min-width: 769px) {
    border-top: 1px solid white;
    border-left: 0;
    border-right: 0;
    height: inherit;
    width: 30%;
  }

  img {
    width: 20%;
    height: 100%;
  }
`;

function ImageSelector({ showImage, images, current }) {
  return (
    <Wrapper>
      {images.map((image, idx) =>
        <ImageThumbnail
          key={idx}
          showImage={showImage}
          image={image}
          selected={current === idx}
          position={idx}
        />
      )}
    </Wrapper>
  );
}

ImageSelector.propTypes = {
  showImage: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
};

export default ImageSelector;
