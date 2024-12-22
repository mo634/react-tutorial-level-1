import React, { Component } from 'react'

export default class ButtonComponent extends Component {
    render() {
        return (
            <button onClick={this.props.onclickProp}>
                <h1>{this.props.title}</h1>
                <span>{this.props.subtitle} </span>
            </button>
        )
    }
}
