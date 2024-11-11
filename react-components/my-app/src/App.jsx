import React from 'react'

const App = () => {
  return (
    <div>
      {/* header  */}

      <div class="header">
        <h1>My Blog</h1>
        <nav><a href="#home">Home</a> | <a href="#about">About</a> | <a href="#contact">Contact</a></nav>
      </div>

      {/* sidebar */}

      <div class="sidebar">
        <h2>Sections</h2>
        <ul>
          <li><a href="#tech">Tech</a></li>
          <li><a href="#lifestyle">Lifestyle</a></li>
        </ul>
      </div>

      {/* content  */}

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


      {/* footer */}
      <div class="footer">
        <p>&copy; 2024 My Blog</p>
      </div>

    </div>
  )
}

export default App