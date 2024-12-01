import React, { Component } from 'react'
import Greeting from './components/Greeting'

export default class App extends Component {
    render() {
        return (
            <div className="">

                <Greeting
                    name="mohamed"
                    age={20}
                />

            </div>
        )
    }
}
