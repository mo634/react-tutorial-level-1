import React, { Component } from 'react'

export default class Greeting extends Component {
    static defaultProps = {
        name: 'unknown'
    }
    render() {
        return (
            <div className="">
                hello, your name is {this.props.name.toUpperCase()}
            </div>
        )
    }
}
