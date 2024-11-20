import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
// Entery point 



// 1.create root (link between v-DOM and real DOM)

createRoot(document.getElementById('root')).render(<App />)


// 2.render elements (apply updates and re-render)

