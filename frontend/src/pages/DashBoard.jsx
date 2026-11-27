
import FoodCard from "../components/FoodCard"
import {Button} from "@/components/ui/button"
import FoodDetails from "../components/FoodDetails"
import FoodForm from "../components/FoodForm"
import {useEffect,useState} from "react"

function DashBoard(){

    const[foods,setFoods]=useState([]);

    useEffect(()=>{
        document.title="Food Donation Count "+foods.length
    },[foods])

    const addFood=(food)=>{
        setFoods([...foods,food])
    }

    return(
        <>
            <div className="flex-1 bg-gray-100 p-6">

                <h2 className="mb-5 text-2xl font-bold">
                    FoodLoop Dashboard
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 shadow">

                    <FoodCard
                        Name="Fresh Vegetables"
                        quantity="25 kg"
                        category="Vegetables"
                    />

                    <FoodCard
                        Name="Cooked Rice"
                        quantity="15 kg"
                        category="Prepared Food"
                    />

                    <FoodCard
                        Name="Fresh Bread"
                        quantity="10 kg"
                        category="Bakery"
                    />

                </div>

                <Button>Add Food</Button>

                <h2 className="mt-6 text-xl font-bold">
                    Add Food Donation
                </h2>

                <FoodForm addOn={addFood}/>

                <h2 className="mt-5 text-xl font-bold">
                    Food Donation Count: {foods.length}
                </h2>

                <>
                    {foods.map((f,index)=>(
                        <FoodDetails key={index} {...f}/>
                    ))}
                </>

            </div>
        </>
    )
}

export default DashBoard
