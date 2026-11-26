
import FoodCard from "../components/FoodCard"

function DashBoard() {
    return (
        <div className="flex-1 bg-gray-100 p-6">

            <h2 className="mb-5 text-2xl font-bold">
                FoodLoop Dashboard
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

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

        </div>
    )
}

export default DashBoard
