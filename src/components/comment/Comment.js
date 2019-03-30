import React , { Component,Fragment } from 'react'

import CommentList from './CommentList'
import CommentForm from './CommentForm'

export default class Comment extends Component {
  constructor(){
    super()
    this.state = {
      key:''
    }

    this.handleRecieve = this.handleRecieve.bind(this)
  }
 
  render(){ 
    return (
      <Fragment>
        <CommentList keyWords={this.state.key}></CommentList>
        <CommentForm onrecieve={this.handleRecieve}></CommentForm>
      </Fragment>
    )
  }

  handleRecieve(key){
    this.setState({
      key
      })

  }
}