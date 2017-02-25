import React, { PropTypes } from 'react';

import PageSection from 'components/shared/PageSection';
import Body from 'components/shared/Body';

import QAEntry from './QAEntry';

function Questions({ questions }) {
  return (
    <PageSection background="#1b1b1b">
      <Body>
        {questions.map((question, idx) =>
          <QAEntry key={idx} entry={question} />
        )}
      </Body>
    </PageSection>
  );
}

Questions.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default Questions;
