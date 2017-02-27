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
    const numOfImages = this.props.images.length
    if (n < 0) {
      n = numOfImages - 1;
    } else if (n >= numOfImages) {
      n = 0;
    }
    this.setState({ current: n });
  }

  render() {
    return (
      <Wrapper>
        <Grid sm={2 / 3}>
          <Showcase 
            showImage={this.showImage} 
            image={this.props.images[this.state.current]} 
            current={this.state.current} 
          />
        </Grid>
        <Grid sm={1 / 3}>
          <ImageSelector 
            showImage={this.showImage} 
            images={this.props.images} 
            current={this.state.current} 
          />
        </Grid>
      </Wrapper>
    );
  }
}

TattooPortfolioSlideshow.propTypes = {
  images: PropTypes.array.isRequired,
};

export default TattooPortfolioSlideshow;
