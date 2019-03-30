import React,{ Fragment } from 'react'

const CommentItem = (props) =>{
  // return <div>{props.value}</div>
  // return <div>{props.children}</div>
  
  if(props.value){
    return (
      <Fragment>
        <div>{props.value ? props.value : props.children}<button onClick={()=>{props.delete(props.index)}}>删除</button></div>
        
      </Fragment> 
    )
  }else{
    return <div>aa</div>
    // 下面三种什么都不渲染 
    // return null
    // return []
    // return ''
  }
}
export default CommentItem