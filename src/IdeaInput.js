import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIdea } from './actions'
import axios from 'axios'
import update from 'immutability-helper'

class IdeaInput extends Component {
  state = {
    input: '',
    ideas: [],
    editingIdeaId: null
  }

  handleInput = (e) => this.setState({
    [e.target.name]: e.target.value
  })

  handleAdd = (e) => {
    e.preventDefault()
    if(this.state.input)
    this.props.addIdea(this.state.input)
    axios.post(
      'http://localhost:3000/api/v1/ideas',
      { idea:
        {
          title: '',
          body: ''
        }
      }
    )
    .then(response => {
      const ideas = update(this.state.ideas, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({
        ideas: ideas,
        editingIdeaId: response.data.id
      })
    })
    .catch(error => console.log(error))
    this.setState({
      input: ''
    })
  }

  handleDelete = (e) => {
    e.preventDefault()
    if(this.state.input)
    this.props.deleteIdea(this.state.input)
    this.setState({
      input: ''
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <input type='text' name='input' onChange={this.handleInput} value={this.state.input}/>
        <button onClick={this.handleAdd}>Submit</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    input: state.input,
    ideas: state.ideas
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
