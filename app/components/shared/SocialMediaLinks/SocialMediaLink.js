import React, { PropTypes } from 'react';
import styled from 'styled-components';

const A = styled.a`
  width: 2em;
  &:hover {
    svg > path {
      fill: white;
    }
  }

  svg > path {
    transition: .2s;
    -webkit-transition: .2s;
  }
`;

class SocialMediaLink extends React.Component {

  constructor(props) {
    super(props);
    this.href = props.href;
  }

  render() {
    return(
      <A href={this.href} target="_blank" >
        {this.props.children}
      </A>
    );
  }
}

SocialMediaLink.propTypes = {
  href: PropTypes.string,
};

export default SocialMediaLink;
