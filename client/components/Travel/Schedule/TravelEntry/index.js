import React, { PropTypes } from 'react';

import Wrapper from './Wrapper';

function TravelEntry({ entry }) {
  return (
    <Wrapper>
      <div>{entry.dateString}</div>
      <div>{entry.placeName}</div>
      <div>{entry.address}</div>
    </Wrapper>
  );
}

TravelEntry.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default TravelEntry;
