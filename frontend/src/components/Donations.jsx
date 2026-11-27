
import React, {useState} from 'react'
import FoodForm from './FoodForm'
import FoodDetails from './FoodDetails'

const Donations = () => {

    const[foods,setFoods]=useState([])

    const addFood=(food)=>{
        setFoods([...foods,food])
    }

    return (
        <div className="flex-1 p-6">

            <h1 className="text-2xl font-bold text-green-700">
                Food Donations
            </h1>

            <FoodForm addOn={addFood}/>

            <h2 className="mt-5 font-bold">
                Donation Count: {foods.length}
            </h2>

            <>
                {foods.map((f,index)=>(
                    <FoodDetails key={index} {...f}/>
                ))}
            </>

        </div>
    )
}

export default Donations
