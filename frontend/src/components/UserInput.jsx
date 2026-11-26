
import React from "react"
import { useState, useEffect } from "react"

const UserInput = () => {

    const [foodName, setFoodName] = useState("")

    useEffect(() => {
        console.log("Food item changed:", foodName)
    }, [foodName])

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-5">

            <h3 className="text-xl font-bold text-green-700">
                Add Food Item
            </h3>

            <input
                type="text"
                value={foodName}
                onChange={(t) => {
                    setFoodName(t.target.value)
                }}
                placeholder="Please enter food item name"
                className="border p-2 rounded-lg mt-3 w-full"
            />

            <p className="mt-3 text-gray-700">
                Food item: {foodName}
            </p>

        </div>
    )
}

export default UserInput
