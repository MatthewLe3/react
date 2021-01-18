import React, { Component } from 'react'

export default class NestIndex extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
