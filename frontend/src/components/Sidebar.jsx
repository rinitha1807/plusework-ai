
import React from 'react'
import { LayoutDashboard, Salad, Gift, Truck, ChartNoAxesCombined } from 'lucide-react'

const Sidebar = () => {
  return (
    <aside className="bg-green-950 text-white w-56 min-h-screen p-5">
      <h3 className="text-green-300 font-semibold mb-5">MAIN MENU</h3>

      <div className="space-y-5">
        <p className="flex items-center gap-3"><LayoutDashboard /> Dashboard</p>
        <p className="flex items-center gap-3"><Salad /> Food Inventory</p>
        <p className="flex items-center gap-3"><Gift /> Donations</p>
        <p className="flex items-center gap-3"><Truck /> Pickups</p>
        <p className="flex items-center gap-3"><ChartNoAxesCombined /> Reports</p>
      </div>

      <p className="mt-12 text-sm text-green-300">Save Food, Save Earth!</p>
    </aside>
  )
}

export default Sidebar
