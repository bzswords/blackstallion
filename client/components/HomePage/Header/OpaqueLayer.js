import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  @media (min-width: 769px) {
    background-color: rgba(0, 0, 0, 0.1);
    -webkit-transition: all 3s ease-out 0.1s;
    -moz-transition: all 3s ease-out 0.1s;
    -o-transition: all 3s ease-out 0.1s;
    transition: all 3s ease-out 0.1s;
  }
`;

const propTypes = {
  children: React.PropTypes.node,
};

export class OpaqueLayer extends React.Component {

  constructor(props) {
    super(props);
    this.children = props.children;
    this.state = {
      hasFadedIn: false,
    };
  }

  componentDidMount() {
    setInterval(
      () => this.fadeIn(),
      1000
    );
  }

  fadeIn() {
    if (!this.state.hasFadedIn) {
      this.node.style.setProperty('background-color', 'rgba(0, 0, 0, 0.4)');
    }
  }

  render() {
    return (
      <Wrapper
        innerRef={(node) => (this.node = node)}
      >
        {this.children}
      </Wrapper>
    );
  }
}

OpaqueLayer.propTypes = propTypes;

export default OpaqueLayer;
