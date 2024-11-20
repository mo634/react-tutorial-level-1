import React from 'react'
import HeaderComponent from './components/HeaderComponent'
import MainContent from './components/MainContent'
import Sidebar from './components/SideBar'
import Footer from './components/Footer'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                {/* header  */}

                <HeaderComponent />


                {/* content  */}

                <MainContent />


                {/* sidebar */}

                <Sidebar />

                {/* footer */}

                <Footer />

            </div>
        )
    }
}

export default App