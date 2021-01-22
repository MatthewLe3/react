import React from 'react'
import Animate from 'rc-animate';
import Button from 'antd/lib/button';
import './index.css'
export default class Enter extends React.Component{
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
          transitionName="fade"
          transitionAppear
        >
          {this.state.show ? 
            <div key="1" className="code_box" /> : null}
        </Animate>
      </div>
    );
  }
}