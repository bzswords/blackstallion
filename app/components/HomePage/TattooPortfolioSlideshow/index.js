/**
*
* TattooPortfolioSlideshow
*
*/

import React, { PropTypes } from 'react';
import Grid from 'grid-styled';
import styled from 'styled-components';

import Showcase from './Showcase';
import ImageSelector from './ImageSelector';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 60em;
  margin: auto;

  @media (min-width: 769px) {
    flex-direction: row;
  }

  > div {
    padding: 0;
    margin: 0;
  }
`;

class TattooPortfolioSlideshow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
    this.showImage = this.showImage.bind(this);
  }

  showImage(n) {
    const numOfImages = this.props.images.length;
    const newIndex = ((index) => {
      if (index < 0) {
        return numOfImages - 1;
      } else if (n >= numOfImages) {
        return 0;
      }
      return index;
    })(n);
    this.setState({ current: newIndex });
  }

  render() {
    return (
      <Wrapper>
        <Showcase
          showImage={this.showImage}
          image={this.props.images[this.state.current]}
          current={this.state.current}
        />
        <ImageSelector
          showImage={this.showImage}
          images={this.props.images}
          current={this.state.current}
        />
      </Wrapper>
    );
  }
}

TattooPortfolioSlideshow.propTypes = {
  images: PropTypes.array.isRequired,
};

export default TattooPortfolioSlideshow;
