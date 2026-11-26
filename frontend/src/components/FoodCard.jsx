
function FoodCard(props) {
    return (
        <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-green-700">
                {props.Name}
            </h2>

            <p className="mt-2 text-3xl text-blue-600">
                {props.quantity}
            </p>

            <p className="mt-2 text-gray-500">
                {props.category}
            </p>
        </div>
    )
}

export default FoodCard
