
import React from 'react'
import {
  LayoutDashboard,
  Salad,
  Gift,
  Truck,
  ChartNoAxesCombined
} from 'lucide-react'

function Sidebar() {
  return (
    <aside className="hidden md:block w-56 bg-green-950 text-white p-5">

      <h2 className="text-green-300 font-bold mb-6">
        MAIN MENU
      </h2>

      <div className="space-y-6">

        <p className="flex items-center gap-3">
          <LayoutDashboard size={20} />
          Dashboard
        </p>

        <p className="flex items-center gap-3">
          <Salad size={20} />
          Food Inventory
        </p>

        <p className="flex items-center gap-3">
          <Gift size={20} />
          Donations
        </p>

        <p className="flex items-center gap-3">
          <Truck size={20} />
          Pickups
        </p>

        <p className="flex items-center gap-3">
          <ChartNoAxesCombined size={20} />
          Reports
        </p>

      </div>

      <p className="mt-16 text-sm text-green-300">
        Save Food, Save Earth!
      </p>

    </aside>
  )
}

export default Sidebar
