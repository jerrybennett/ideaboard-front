import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addIdea } from './sagas'

class IdeaInput extends Component {
  state = {
    input: ''
  }

  handleInput = (e) => this.setState({[e.target.name]: e.target.value})

  handleSend = (e) => {
    e.preventDefault()
    if(this.state.input !== '')
    this.props.addIdea(this.state.input)
    this.setState({
      input: ''
    })
  }

  render() {
    console.log(this.state.input)
    return (
      <div>
        <input type='text' name='input' onChange={this.handleInput} value={this.state.input}/>
        <button onClick={this.handleSend}>Submit</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    input: state.input
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addIdea: (idea) => dispatch({
      type: 'ADD_IDEA',
      payload: idea
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IdeaInput);
