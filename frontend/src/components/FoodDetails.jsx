
import React from 'react'

const FoodDetails = ({foodName, quantity, donorName, email, category, expiryDate}) => {

    return(
        <div>
            <h3>{foodName}</h3>
            <p>{email}</p>
            <p>Quantity: {quantity} kg</p>
            <p>Donor: {donorName}</p>
            <p>Category: {category}</p>
            <p>Expiry Date: {expiryDate}</p>
        </div>
    )
}

export default FoodDetails
