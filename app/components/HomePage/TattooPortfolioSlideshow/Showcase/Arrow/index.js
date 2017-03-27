import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import Background from './Background';
import Label from './Label';

class Arrow extends React.PureComponent {

  constructor(props) {
    super(props);
    this.activateImage = this.activateImage.bind(this);
    this.state = {
      desktopBackground : props.desktopBackground
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      desktopBackground : nextProps.desktopBackground
    });
  }

  activateImage() {
    const newIndex = this.props.currentIndex + this.props.stepValue;
    this.props.showImage(newIndex);
  }

  render() {
    const label = this.props.stepValue == 1 ? 'Next' : 'Previous';
    return(
      <Wrapper
        onClick={this.activateImage}
      >
        <Background desktopBackground={this.state.desktopBackground} />
        <Label
          altText="Placeholder"
          text={label}
          stepValue={this.props.stepValue}
        />
      </Wrapper>
    );
  }
}

Arrow.propTypes = {
  desktopBackground: PropTypes.string,
  currentIndex: PropTypes.number.isRequired,
  stepValue: PropTypes.number.isRequired,
  showImage: PropTypes.func.isRequired,
};

export default Arrow;
