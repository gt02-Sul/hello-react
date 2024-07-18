import { useState } from 'react'

export const ProductCounter = ({ disabled }) => {
    const [counter, setCounter] = useState(0);

    const handleDecrease = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    const handleIncrease = () => {
        setCounter(counter + 1)
    }

    return (
        <div className='amount-wrapper'>
            <button onClick={handleDecrease} disabled={disabled}>
                -
            </button>
            <p>{counter}</p>
            <button onClick={handleIncrease} disabled={disabled}>
                +
            </button>
        </div>
    )
}