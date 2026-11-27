
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import foodSchema from '@/lib/foodSchema'

const FoodForm = ({addOn}) => {

    const [success, setSuccess] = useState("")

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({resolver: zodResolver(foodSchema)})

    const submit=(data)=>{
        addOn(data);
        setSuccess("Food donation added successfully!");
        reset();
    }

    return (
    <div>
        <form onSubmit={handleSubmit(submit)}>

            <input {...register("foodName")} placeholder="Enter food name" />
            <p className="text-red-500">{errors.foodName?.message}</p>

            <input {...register("quantity")} placeholder="Enter quantity in kg" type="number" />
            <p className="text-red-500">{errors.quantity?.message}</p>

            <input {...register("donorName")} placeholder="Enter donor name" />
            <p className="text-red-500">{errors.donorName?.message}</p>

            <input {...register("email")} placeholder="Enter the email" />
            <p className="text-red-500">{errors.email?.message}</p>

            <select {...register("category")}>
                <option value="">Select category</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Cooked Food">Cooked Food</option>
                <option value="Bakery">Bakery</option>
            </select>
            <p className="text-red-500">{errors.category?.message}</p>

            <input {...register("expiryDate")} type="date" />
            <p className="text-red-500">{errors.expiryDate?.message}</p>

            <button type="submit">Add Food Donation</button>

            {success && <p className="text-green-600">{success}</p>}

        </form>
    </div>
    )
}

export default FoodForm
