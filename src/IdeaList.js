import React, { Component } from 'react';
import * as ReactDOM from 'react-dom'
import { connect } from 'react-redux'

class IdeaList extends Component {


  ideaList = () => {
    return this.props.ideas.map(i => <li>{i}</li>)
  }

  render() {
    console.log(this.props)
    return (
      <ul>
        {this.ideaList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  return {
    ideas: state.ideas
  }
}
export default connect(mapStateToProps, null)(IdeaList)
