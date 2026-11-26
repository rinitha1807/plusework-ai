
import React from 'react'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import DashBoard from './pages/DashBoard'
import Login from './pages/Login'

import Counter from './components/Counter'
import UserInput from './components/UserInput'

const App = () => {

    return (
        <>
            <Navbar />

            <div className="flex flex-col md:flex-row min-h-screen">

                <Sidebar />

                <div className="flex-1 p-5">

                    <DashBoard />

                    <Counter />

                    <UserInput />

                </div>

            </div>

            <Footer />

        </>
    )
}

export default App
