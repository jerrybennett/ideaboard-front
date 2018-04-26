import React, { Component } from 'react';
import { connect } from 'react-redux';

class IdeaInput extends Component {
  state = {
    input: ''
  }

  handleInput = (e) => this.setState({[e.target.name]: e.target.value})

  render() {
    console.log(this.state.input)
    return (
      <div>
        <input type='text' name='input' onChange={this.handleInput}/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    input: state.input
  };
};

export default connect(mapStateToProps, null)(IdeaInput);
