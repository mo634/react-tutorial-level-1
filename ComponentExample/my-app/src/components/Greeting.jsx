import React, { Component } from 'react'
import PropType from 'prop-types'

export default class Greeting extends Component {

    // create state 
    state = {
        // define your own data 
        nameUpperCase: this.props.name.toUpperCase()
    }
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
                hello, your name is {this.state.nameUpperCase}

                <p>your first letter is {this.state.nameUpperCase[0]}</p>{/*mohamed -> MOHADED -> M*/}

                and your age is {(this.props.age)} {/* 233 */}
            </div>
        )
    }
}
