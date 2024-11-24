import React, { Component } from 'react'
import ProjectSection from './components/ProjectSection'
export default class App extends Component {
    render() {
        return (
            <div>
                <ProjectSection
                    // passing params (props)
                    title="Admin Dashboard"
                    desc="This is Admin Dashboard Website"
                    tech="HTMl,CSS,JS"
                />
                <ProjectSection
                    title="youtube clone"
                    desc="This is youtube clone"
                    tech="HTMl,CSS,JS,React js"
                />
                <ProjectSection
                    title="tiktok clone"
                    desc="This is tiktok clone"
                    tech="HTMl,CSS,Tailwind,Nextjs"

                />
            </div>
        )
    }
}
