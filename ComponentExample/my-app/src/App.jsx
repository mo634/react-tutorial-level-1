// responding to events "passing event handlers as props "
import React, { Component } from 'react';
import ButtonComponent from './components/ButtonComponent';


export default class App extends Component {

    onClickButton = (message) => {
        alert(`button ${message} clicked`)
    }
    render() {
        return (
            <div>
                {/* <button onClick={() => alert("button 1 clicked")}>
                    <h1>i'm button 1 </h1>
                    <span>button 1</span>
                </button>

                <button onClick={() => alert("button 2 clicked")}>
                    <h1>i'm button 2 </h1>
                    <span>button 2</span>
                </button>

                <button onClick={() => alert("button 3 clicked")}>
                    <h1>i'm button 3 </h1>
                    <span>button 3</span>
                </button>

                <button onClick={() => alert("button 4 clicked")}>
                    <h1>i'm button 4 </h1>
                    <span>button 4</span>
                </button> */}

                <ButtonComponent
                    title="i'm button 1"
                    subtitle="button 1"
                    onclickProp={() => this.onClickButton("1")}
                />
                <ButtonComponent
                    title="i'm button 2"
                    subtitle="button 2"
                    onclickProp={() => this.onClickButton("2")}
                />
                <ButtonComponent
                    title="i'm button 3"
                    subtitle="button 3"
                    onclickProp={() => this.onClickButton("3")}
                />
                <ButtonComponent
                    title="i'm button 4"
                    subtitle="button 4"
                    onclickProp={() => this.onClickButton("4")}
                />

            </div>
        );
    }
}
