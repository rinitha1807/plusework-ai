
import React from 'react'
import { Leaf, Bell, Search } from 'lucide-react'

function Navbar() {
  return (
    <nav className="bg-green-700 p-4 text-white flex justify-between items-center">

      <h1 className="text-2xl font-bold flex items-center gap-2">
        <Leaf />
        FoodLoop
      </h1>

      <div className="flex items-center gap-5">

        <div className="hidden sm:flex items-center bg-white rounded-lg px-3 py-2 text-gray-700">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search food..."
            className="ml-2 outline-none w-32"
          />
        </div>

        <Bell />

        <h2 className="font-semibold">Admin</h2>

      </div>
    </nav>
  )
}

export default Navbar
