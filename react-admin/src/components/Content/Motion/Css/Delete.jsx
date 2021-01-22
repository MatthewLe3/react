import React from 'react'
import Animate from 'rc-animate';
import {Button} from 'antd';
import './index.css'
export default class Delete extends React.Component{
  constructor() {
    super(...arguments);
    this.state = {
      show: true,
    };
    [
      'onClick',
    ].forEach((method) => this[method] = this[method].bind(this));
  }
  
  onClick(){
    this.setState({
      show: !this.state.show,
    });
  }
  
  render(){
    return (
      <div className="code-box-demo-wrapper">
        <p className="buttons">
          <Button type="primary" onClick={this.onClick}>Switch</Button>
        </p>
        <Animate
          component=""
          transitionName="fade"
        >
          {
            this.state.show ? 
              <div key="1" className="code_box" /> : null}
        </Animate>
      </div>
    );
  }
}