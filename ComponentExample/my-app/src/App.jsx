// responding to events "reading props in event handlers "
import React, { Component } from 'react'


class AlertButton extends Component {

    render() {
        return (
            <button onClick={() => alert(this.props.alertMessage)}>{this.props.children}</button>
        )
    }
}
export default class App extends Component {

    render() {
        return (
            <div>
                {/* <button onClick={() => alert("submit clicked")}> submit</button>

                <button onClick={() => alert("image upload clicked")}> image upload</button>

                <button onClick={() => alert("play movie clicked")}> play movie </button>

                <button onClick={() => alert("button 1 clicked")}>button 1 </button> */}




                {/* <AlertButton alertMessage="image upload clicked" content=" image upload" />
                <AlertButton alertMessage="play movie clicked" content="play movie" />
                <AlertButton alertMessage="button 1 clicked" content="button 1" /> */}

                <AlertButton alertMessage="image upload clicked"> image upload</AlertButton>

                <AlertButton alertMessage="play movie clicked">play movie</AlertButton>




            </div>
        )
    }
}
