import React from 'react';

import Wrapper from './Wrapper';

function Form() {
  return (
    <Wrapper>
      <input type="text" name="first_name" placeholder="First Name*" />
      <input type="text" name="last_name" placeholder="Last Name*" />
      <input type="text" name="email" placeholder="Email Address*" />
      <input type="text" name="phone" placeholder="Phone Number*" />
      <input type="text" name="description" placeholder="Tattoo Idea/Location/Size*" />
      <input type="text" name="availability" placeholder="Available Dates*" />
      <input type="text" name="budget" placeholder="Budget" />
      <input type="submit" name="submit" value="Submit" />
    </Wrapper>
  );
}

export default Form;
