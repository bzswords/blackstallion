import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Arrow from './Arrow';

import LeftArrow from './images/LeftArrow.svg';
import RightArrow from './images/RightArrow.svg';

const Wrapper = styled.div`
  display: flex;
  border: 0.2em solid white;

  > span img {
    width: 100%;
  }
`;

function Showcase({ showImage, image, current }) {
  return (
    <Wrapper>
      <Arrow 
        image={LeftArrow} 
        stepValue={-1} 
        currentIndex={current}
        showImage={showImage}
      />
      <span><img src={image.path} /></span>
      <Arrow 
        image={RightArrow} 
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
