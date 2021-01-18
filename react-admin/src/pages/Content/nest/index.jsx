import React, { Component } from 'react'

export default class Nest extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
