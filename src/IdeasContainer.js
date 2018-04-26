import React, { Component } from 'react';
import IdeaInput from './IdeaInput';
import IdeaList from './IdeaList'

export default class IdeasContainer extends Component {
  state = {
    ideas: []
  }
  render() {
    return (
      <div>
        Ideas
        <IdeaInput />
        <IdeaList />
      </div>
    );
  }
}
