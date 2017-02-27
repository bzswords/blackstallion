import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';


class ImageThumbnail extends React.PureComponent {

  constructor(props) {
    super(props);
    this.activateImage = this.activateImage.bind(this);
  }

  activateImage() {
    this.props.showImage(this.props.position)
  }

  render() {
    return (
      <Wrapper image={this.props.image} selected={this.props.selected} onClick={this.activateImage}>
        <div></div>
      </Wrapper>
    );
  }
}

ImageThumbnail.propTypes = {
  showImage: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  position: PropTypes.number.isRequired,
};

export default ImageThumbnail;
