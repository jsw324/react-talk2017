import React from 'react';
import { connect } from 'react-redux';

import Speakers from './Speakers';

const SpeakersContainers = ({ speakers }) => {
  const mapSpeakers = speakers.map((speaker, i) => <Speakers speaker={speaker} key={`speak_${i}`} />);
    return (
      <div>
        <p>list</p>
        { mapSpeakers }
      </div>
  );
};

export default connect(
  state => ({ 
      speakers: state.setSpeakerDetails, 
    })
)(SpeakersContainers);
