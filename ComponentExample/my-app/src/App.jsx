import React, { Component } from 'react'
import ProjectOne from './components/ProjectOne'
import ProjectTwo from './components/ProjectTwo'
import ProjectThree from './components/ProjectThree'
export default class App extends Component {
    render() {
        return (
            <div>
                <ProjectOne />
                <ProjectTwo />
                <ProjectThree />
            </div>
        )
    }
}
