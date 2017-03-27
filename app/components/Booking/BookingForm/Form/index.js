import React, { PropTypes } from 'react';
import { Formio } from 'react-formio';

import Wrapper from './Wrapper';

export default class Form extends React.PureComponent {

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.state = {
      submitted: false
    }
  }

  onSubmit() {
    console.log('onFormSubmit');
    this.setState({
      submitted : true
    });
  }

  onLoad() {
    console.log('onFormLoad');
  }

  render() {
    const body = ((submitted) => {
      if (submitted) {
        return(
          <div className="submitted">
            <span>
              Thank you.
            </span>
            <br />
            We will be reaching out to you in the next few days to discuss your request.
          </div>
        );
      }
      return (
        <Formio
          src="https://ldxupcvefsrdkvs.form.io/booking"
          onFormSubmit={this.onSubmit}
          onFormLoad={this.onLoad}
        />
      );
    })(this.state.submitted);
    return(
      <Wrapper>
        {body}
      </Wrapper>
    );
  }

} 
