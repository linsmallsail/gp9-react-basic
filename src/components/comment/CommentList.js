import React , { Component ,Fragment} from 'react'

import CommentItem from './CommentItem'

export default class ComponetList extends Component{
  // constructor只执行一次，不能时刻监听
  constructor(){
    super()
    this.state={
      keyList:[]
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  // 时刻监听父组件传来的props
  componentWillReceiveProps(props){
   this.setState({
     keyList:[
       ...this.state.keyList,
       props.keyWords
     ]
   },()=>{
     console.log(this.state.keyList);
     
   })
  }
  render(){
    return (
      // 可以传入表达式，函数，三元运算，不能是语句
      <Fragment>
        {
          this.state.keyList.map((value,index)=>{
            // return <CommentItem key={index} value={value}></CommentItem>
            return <CommentItem key={index} index={index} delete={ this.handleDelete }>{value}</CommentItem>
          })
        }
        <div>
        <button onClick={this.handleChange}>change</button>
        </div>
      </Fragment>
    )
  }
  handleDelete(index){
    this.state.keyList.splice(index,1)
    this.setState({})
    
  }
  handleChange(){
    this.state.keyList[0] = 'aa'
    this.setState({})
  }

}