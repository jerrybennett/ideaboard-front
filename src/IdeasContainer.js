import React, { Component } from 'react';
import IdeaInput from './IdeaInput';

export default class IdeasContainer extends Component {
  state = {
    ideas: []
  }
  render() {
    return (
      <div>
        Ideas
        <IdeaInput />
      </div>
    );
  }
}
