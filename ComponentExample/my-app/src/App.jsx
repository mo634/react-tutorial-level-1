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
                    numbeOfDays={10}
                />

                <ProjectSection
                    title="youtube clone"
                    desc="This is youtube clone"
                    tech="HTMl,CSS,JS,React js"
                    numbeOfDays={5}

                />

                <ProjectSection
                    title="tiktok clone"
                    desc="This is tiktok clone"
                    tech="HTMl,CSS,Tailwind,Nextjs"
                    numbeOfDays={4}
                />

                <ProjectSection
                    title="facebook clone"
                    desc="This is facebook clone"
                    tech="HTMl,CSS,Tailwind,Nextjs,mongodb"
                />


            </div>
        )
    }
}
