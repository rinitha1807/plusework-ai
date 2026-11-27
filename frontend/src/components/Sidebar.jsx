
import React from 'react'
import {NavLink} from 'react-router-dom'

const Sidebar=()=>{

    const menuStyle=({isActive}) =>
        `mt-3 p-2 rounded ${
            isActive
            ? "bg-green-600 text-white font-bold"
            : "text-gray-800 hover:bg-green-200"
        }`

    return(
        <div className="min-h-screen w-full md:w-48 bg-green-100 p-5 flex flex-row md:flex-col flex-wrap">

            <h2 className="font-bold w-full">
                Menu
            </h2>

            <NavLink to="/" end className={menuStyle}>
                Dashboard
            </NavLink>

            <NavLink to="/about" className={menuStyle}>
                About
            </NavLink>

            <NavLink to="/inventory" className={menuStyle}>
                Food Inventory
            </NavLink>

            <NavLink to="/donations" className={menuStyle}>
                Donations
            </NavLink>

            <NavLink to="/pickups" className={menuStyle}>
                Pickups
            </NavLink>

        </div>
    )
}

export default Sidebar
