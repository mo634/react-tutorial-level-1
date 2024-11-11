import React from 'react'


// create header component 
import React from 'react'

const HeaderComponet = () => {
    return (
        <div class="header">
            <h1>My Blog</h1>
            <nav><a href="#home">Home</a> | <a href="#about">About</a> | <a href="#contact">Contact</a></nav>
        </div>
    )
}
import React from 'react'

const SideBar = () => {
    return (

        <div class="sidebar">
            <h2>Sections</h2>
            <ul>
                <li><a href="#tech">Tech</a></li>
                <li><a href="#lifestyle">Lifestyle</a></li>
            </ul>
        </div>
    )
}

import React from 'react'

const Content = () => {
    return (
        <div class="main-content">
            <h2>Blog Posts</h2>
            <article>
                <h3>Post 1</h3>
                <p>This is the first blog post content.</p>
            </article>
            <article>
                <h3>Post 2</h3>
                <p>This is the second blog post content.</p>
            </article>
        </div>
    )
}

import React from 'react'

const Foooter = () => {
    return (
        <div>Foooter</div>
    )
}






const reactComponents = () => {
    return (
        <div>
            {/* header */}
            <HeaderComponet />

            {/* sidebar */}

            <SideBar />

            {/* content */}

            <Content />

            <Content />
            {/* footer */}

            <Foooter />


        </div>
    )
}

export default reactComponents