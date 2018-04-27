import React, { Component } from 'react';
import * as ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import axios from 'axios'

class IdeaList extends Component {

  state = {
    ideas: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/v1/ideas.json`)
    .then(res => {
      console.log(res)
      this.setState({ideas: res.data})
    })
    .catch(error => console.log(error))
  }

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
