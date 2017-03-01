import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  min-width: 2em;

  img {
    position: absolute;
    top: 50%;
    width: 80%;
    margin: 0 0.2em;
  } 
`;

class Arrow extends React.PureComponent {

  constructor(props) {
    super(props);
    this.activateImage = this.activateImage.bind(this);
  }

  activateImage() {
    const newIndex = this.props.currentIndex + this.props.stepValue;
    this.props.showImage(newIndex);
  }

  render() {
    return (
      <Wrapper onClick={this.activateImage}>
        <img src={this.props.image} alt="Placeholder" />
      </Wrapper>
    );
  }

}

Arrow.propTypes = {
  image: PropTypes.string.isRequired,
  currentIndex: PropTypes.number.isRequired,
  stepValue: PropTypes.number.isRequired,
  showImage: PropTypes.func.isRequired,
};

export default Arrow;
