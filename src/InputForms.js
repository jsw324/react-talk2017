import React from 'react';
import { connect } from 'react-redux';
import SpeakersContainer from './SpeakersContainer';
import * as actions from './state/actions';

class InputForms extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm (e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const { name, topic } = this.refs;
    dispatch(actions.setSpeakerDetails(name.value, topic.value));
    this.refs.topic.value = '';
    this.refs.name.value = '';
  }

  render () {
    return (
      <div>
        <h3>Please Enter Information</h3>
        <form onSubmit={this.submitForm}>
          <label>
            Speaker Name: 
            <input 
              type="text" 
              name="name" 
              ref="name"
            />
          </label>    
          <label>    
            Topic: 
            <input 
              type="text" 
              name="topic" 
              ref="topic"
            />
          </label>  
          <input type="submit" />
        </form>
        <SpeakersContainer name="Jason" topic="React" />
      </div>
    );
  };
};

export default connect()(InputForms);
