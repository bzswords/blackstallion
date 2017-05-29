import React, { PropTypes } from 'react';

import StrikethroughHeading from './../../shared/StrikethroughHeading';
import PageSection from './../../shared/PageSection';
import PageSectionHeader from './../../shared/PageSectionHeader';

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
