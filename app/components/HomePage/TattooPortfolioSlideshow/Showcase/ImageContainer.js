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

const props = {
  image: PropTypes.string.isRequired,
}

function ImageContainer(props) {
  return (
    <Wrapper>
      <img src={props.image} />
    </Wrapper>
  );
}

ImageContainer.propTypes = props;

export default ImageContainer;
