
import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import DashBoard from './pages/DashBoard'
import Login from './pages/Login'
import {Routes,Route} from 'react-router-dom'
import About from './components/About'
import FoodInventory from './components/FoodInventory'
import Donations from './components/Donations'
import Pickups from './components/Pickups'

const App = () => {
  return (
    <>
      <Navbar/>

      <div className="flex flex-col md:flex-row">
        <Sidebar/>

        <Routes>
          <Route path="/" element={<DashBoard/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/inventory" element={<FoodInventory/>}/>
          <Route path="/donations" element={<Donations/>}/>
          <Route path="/pickups" element={<Pickups/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>

      <Footer/>
    </>
  )
}

export default App
