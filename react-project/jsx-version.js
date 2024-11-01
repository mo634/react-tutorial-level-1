
// create root (link between v-dom and real dom)
const root = ReactDOM.createRoot(document.getElementById('root'));

// create function 
function tick() {

    // create element 
    const element =
        <div>
            <h1>It is {new Date().toLocaleTimeString()}.</h1>
        </div>

    // append element to the dom
    root.render(element);

}


setInterval(tick, 1000)