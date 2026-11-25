
import React from 'react'
import { Bell, Leaf, Search } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h2 className="text-xl font-bold text-green-700 flex items-center gap-2">
        <Leaf /> FoodLoop
      </h2>

      <div className="flex items-center gap-5">
        <div className="hidden sm:flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search food..."
            className="bg-transparent outline-none w-32"
          />
        </div>

        <Bell className="text-gray-600" />
        <span className="font-semibold text-gray-700">Admin</span>
      </div>
    </nav>
  )
}

export default Navbar
