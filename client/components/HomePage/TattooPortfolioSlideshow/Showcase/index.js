import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Arrow from './Arrow';
import ImageContainer from './ImageContainer';

const Wrapper = styled.div`
  display: flex;
  border: 0.2em solid white;
  width: 100%;

  @media (min-width: 769px) {
    width: 70%;
  }

  > span img {
    width: 100%;
  }
`;

function Showcase({ showImage, image, current }) {
  return (
    <Wrapper>
      <Arrow
        desktopBackground={image.path}
        stepValue={-1}
        currentIndex={current}
        showImage={showImage}
      />
      <ImageContainer image={image.path} />
      <Arrow
        desktopBackground={image.path}
        stepValue={1}
        currentIndex={current}
        showImage={showImage}
      />
    </Wrapper>
  );
}

Showcase.propTypes = {
  showImage: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
  current: PropTypes.number.isRequired,
};

export default Showcase;
