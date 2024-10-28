// create h1 
const heading = React.createElement(
    "h1",
    null,
    "Hello, Welcome!"
)

// create p 

const paragraph = React.createElement(
    "p",
    null,
    "My Name is Mohamed Mostafa."
)

// create div(parent)

const parentDiv = React.createElement(
    "Div",
    null,

    heading,
    paragraph
)

// create root 

const root = ReactDOM.createRoot(document.getElementById('root'))

// render phase 

root.render(parent)



const parentDiv = <div>
    <h1>Hello, Welcome!</h1>
    <p>My Name is Mohamed Mostafa.</p>
</div>