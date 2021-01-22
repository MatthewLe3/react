import React from 'react'
import './index.css'
import { Button } from 'antd'
import Animate from 'rc-animate';
const Div = (props) => {
    const childrenProps = { ...props };
    delete childrenProps.show;
    return <div {...childrenProps} />;
};
export default class Simple extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            show: true,
        };
        [
            'onClick',
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    onClick() {
        this.setState({
            show: !this.state.show,
        });
    }

    render() {
        return (
            <div className="code-box-demo-wrapper">
                <p className="buttons">
                    <Button type="primary" onClick={this.onClick}>Switch</Button>
                </p>
                <Animate
                    showProp="show"
                    transitionName="fade"
                >
                    <Div show={this.state.show} className={'code_box'} />
                </Animate>
            </div>
        );
    }
}
