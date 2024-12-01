import React, { Component } from 'react'
import PropType from 'prop-types'

export default class Greeting extends Component {
    static defaultProps = {
        name: 'unknown'
    }
    static propTypes = {
        age: PropType.number,
        name: PropType.string
    }

    render() {
        return (
            <div className="">
                hello, your name is {this.props.name.toUpperCase()}
                and your age is {this.props.age + 3} {/* 233 */}
            </div>
        )
    }
}
