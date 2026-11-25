
import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-2">
            Dashboard
          </h1>

          <p className="text-gray-600 mb-6">
            Welcome to Food Waste Reduction Management System
          </p>

          <div className="grid grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-lg shadow">
              <h2 className="text-gray-500">Food Rescued</h2>
              <h1 className="text-3xl font-bold text-green-500">120 kg</h1>
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              <h2 className="text-gray-500">Meals Shared</h2>
              <h1 className="text-3xl font-bold text-blue-500">250</h1>
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              <h2 className="text-gray-500">Food Donations</h2>
              <h1 className="text-3xl font-bold text-orange-500">80</h1>
            </div>
          </div>

          <div className="bg-white p-6 mt-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">
              Available Food Inventory
            </h2>

            <p className="text-gray-600 mb-3">Fresh Vegetables - 25 kg</p>
            <p className="text-gray-600 mb-3">Cooked Rice - 15 kg</p>
            <p className="text-gray-600 mb-3">Fresh Bread - 10 kg</p>

            <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
              View Food Donations
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
