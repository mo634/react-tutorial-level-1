import React, { Component } from 'react'

export default class ProjectSection extends Component {
    render() {
        return (
            <section>
                <p>{this.props.title}</p>

                <p>{this.props.desc} </p>

                <div className="">
                    {this.props.tech}
                </div>

            </section>
        )
    }
}
