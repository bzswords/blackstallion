import React, { PropTypes } from 'react';

import StrikethroughHeading from 'components/shared/StrikethroughHeading';
import PageSection from 'components/shared/PageSection';
import PageSectionHeader from 'components/shared/PageSectionHeader';

import TravelEntry from './TravelEntry';

function Schedule({ entries }) {
  return (
    <PageSection background="#1b1b1b">
      <PageSectionHeader>
        <StrikethroughHeading text="Upcoming Dates"></StrikethroughHeading>
      </PageSectionHeader>
      {entries.map((entry, idx) =>
        <TravelEntry key={idx} entry={entry} />
      )}
    </PageSection>
  );
}

Schedule.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default Schedule;
