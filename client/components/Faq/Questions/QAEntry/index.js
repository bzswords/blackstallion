import React, { PropTypes } from 'react';

import Wrapper from './Wrapper';

function QAEntry({ entry }) {
  return (
    <Wrapper>
      <div>Q: {entry.question}</div>
      <div>A: {entry.answer}</div>
    </Wrapper>
  );
}

QAEntry.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default QAEntry;
