import { createRoot } from 'react-dom/client'

// Entery point 



// 1.create root (link between v-DOM and real DOM)

createRoot(document.getElementById('root')).render(
    <div className="App">
        {/* header  */}

        <header className="header">
            <h1>Welcome to My Website</h1>
        </header>


        {/* content  */}

        <main className="main-content">
            <h2>Main Content Area</h2>
            <p>This is the main content of the website. Here, you can add articles, images, or any other information you want to showcase.</p>
        </main>

        {/* sidebar */}

        <aside className="sidebar">
            <h3>Sidebar</h3>
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
            </ul>
        </aside>

        {/* footer */}

        <footer className="footer">
            <p>© 2024 My Website. All rights reserved.</p>
        </footer>

    </div>
)


// 2.render elements (apply updates and re-render)

