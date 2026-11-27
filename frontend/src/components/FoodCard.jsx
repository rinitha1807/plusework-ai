
function FoodCard(props){
    return(
        <div>
            <h2 className="text-lg font-bold">
                {props.Name}
            </h2>

            <p className="mt-2 text-3xl text-green-600">
                {props.quantity}
            </p>

            <p>{props.category}</p>
        </div>
    )
}

export default FoodCard
