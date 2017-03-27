import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }

  @media (min-width: 767px) {
    flex: 0 0 24em;
  }
`;

const propTypes = {
  image: PropTypes.string.isRequired,
};

function ImageContainer(props) {
  return (
    <Wrapper>
      <img
        alt="Black Stallion Tattoo"
        src={props.image}
      />
    </Wrapper>
  );
}

ImageContainer.propTypes = propTypes;

export default ImageContainer;
