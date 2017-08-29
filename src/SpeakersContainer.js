import React from 'react';
import { connect } from 'react-redux';

import Speakers from './Speakers';

const mapSpeakers = (speakers) => speakers.map((speaker, i) => <Speakers speaker={speaker} key={`speak_${i}`} />);

const SpeakersContainers = ({ speakers }) => (
  <div>
    <br />
    <h5>Upcoming Talks:</h5>
    <ul className="collection">
      { mapSpeakers(speakers) }
    </ul>
  </div>
);

export default connect(
  state => ({ 
      speakers: state.setSpeakerDetails, 
    })
)(SpeakersContainers);
