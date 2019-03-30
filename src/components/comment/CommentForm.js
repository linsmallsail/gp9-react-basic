import React , { Component,Fragment } from 'react'

export default class CommentForm extends Component{
  constructor(){
    super()
    this.state = {
      key:'dddd'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCommit = this.handleCommit.bind(this)
  }

  render(){
    return (
      <Fragment>
        <textarea value={this.state.key} onChange={this.handleChange}></textarea>
        <button onClick={this.handleCommit}>提交</button>

      </Fragment>
    )
  }
  handleChange(e){
    this.setState({
      key:e.target.value
    }) 
  }
  handleCommit(){
    
    this.props.onrecieve(this.state.key)
  }



}