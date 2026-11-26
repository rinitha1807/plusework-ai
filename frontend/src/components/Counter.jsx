
import { useState, useEffect } from "react"
import { Button } from "./ui/button"

function Counter() {

    const [count, setCount] = useState(0)

    function increase() {
        setCount(count + 1)
    }

    function decrease() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    useEffect(() => {
        console.log("Food donation count updated:", count)
    }, [count])

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-5">

            <h3 className="text-xl font-bold text-green-700">
                Food Donation Counter
            </h3>

            <p className="text-3xl font-bold my-4">
                {count}
            </p>

            <div className="flex gap-3">

                <Button onClick={increase}>
                    Increase
                </Button>

                <Button onClick={decrease}>
                    Decrease
                </Button>

            </div>

        </div>
    )
}

export default Counter
