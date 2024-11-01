
function tickWithPureJS() {
    // create element 

    const element =
        `
    <div>

        <h1>It is ${new Date().toLocaleTimeString()}.</h1> // get the current time 

    </div>
    `

    // appent element to the dom 
    document.getElementById("app1").innerHTML = element
}

setInterval(tickWithPureJS, 1000)


