import React , {
  Component,
  Fragment
} from 'react'

// import Comment from './components/comment/Comment'
import Jsx from './components/Jsx'
//函数式组件，无状态组件
// const App = function(props) {
//   return (
//     <div title={props.title} className="cla">
//         <a href="#">baidu</a>
//     </div>
//   )
// }
//类组件，有状态组件
class App extends Component{
  constructor(){
    //为了this，调用父类constructor
    super()
    // console.log(this);
    
    // this.state = {
    //   count:0
    // } 
    // this.handleClick = this.handleClick.bind(this) 
  }
  render(){ 
    // console.log(this,1);
    // let { title } = this.props
    return (
      // <Fragment>
      //   <div title={title}>{this.state.count}</div>
      //   <button onClick={this.handleClick}>click</button>
      // </Fragment>
      // <Comment></Comment>
      <Jsx></Jsx>
    )
  }

  // handleClick(){
    //console.log(this)//undefined 所以需要绑定this
    // setState两个参数，第一个可以是函数也可以是字面量
    // 修改原有状态需要用setState传入prevState，
    // setState是异步函数，需要回调函数来接收计算后的值
    // this.state.msg = 'haha'
    // this.setState(
    //   prevState =>{
    //     return {
    //       count:prevState.count +=1
    //     }
    //   },
    //   () => {
    //     console.log(this.state.count);
        
    //   }
    // ) 
  // }
}


export default App 