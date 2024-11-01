
const root = ReactDOM.createRoot(document.getElementById('root'));

function tickWithReact() {
    const element = React.createElement(
        'div',
        null,

        React.createElement(
            'h1',
            null,
            `It is ${new Date().toLocaleTimeString()}`,
        )


    );


    root.render(element);

}

setInterval(tickWithReact, 1000)