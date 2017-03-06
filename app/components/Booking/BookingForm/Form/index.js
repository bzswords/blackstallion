import React from 'react';
import Grid from 'grid-styled';

import Wrapper from './Wrapper';

function Form() {
  return (
    <Wrapper>
      <Grid sm={1 / 2}>
        <input type="text" name="first_name" placeholder="First Name*" />
      </Grid>
      <Grid sm={1 / 2}>
        <input type="text" name="last_name" placeholder="Last Name*" />
      </Grid>
      <Grid sm={1 / 1}>
        <input type="text" name="email" placeholder="Email Address*" />
      </Grid>
      <Grid sm={1/ 1}>
        <input type="text" name="phone" placeholder="Phone Number*" />
      </Grid>
      <Grid sm={1 / 1}>
        <textarea name="description" placeholder="Tattoo Idea/Location/Size*" />
      </Grid>
      <Grid sm={1 / 2}>
        <input type="text" name="availability" placeholder="Available Dates*" />
      </Grid>
      <Grid sm={1 / 2}>
        <input type="text" name="budget" placeholder="Budget" />
      </Grid>
      <input type="submit" name="submit" value="Submit" />
    </Wrapper>
  );
}

export default Form;
