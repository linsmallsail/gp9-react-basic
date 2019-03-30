import React,{ Fragment ,Component } from 'react'

// 不加./会自动向node_modules里找
import './style.css'
class Jsx extends Component {
  constructor(){
    super()
    this.state = {
      msg:'<b>hello</b>'

    }
  }
  render () {
   return (
      <div className="divStyle" dangerouslySetInnerHTML={{__html:this.state.msg}}></div>
    )
  }
}

export default Jsx