import React, { Component } from 'react'

export default class ProjectSection extends Component {

    static defaultProps = {
        numbeOfDays: 0
    }
    render() {
        return (
            <>
                <section>
                    <p>{this.props.title}</p>

                    <p>{this.props.desc} </p>

                    <div className="">
                        {this.props.tech}
                    </div>

                    <div className="">
                        number of days {this.props.numbeOfDays}

                    </div>


                </section>

                <hr />
            </>
        )
    }
}
