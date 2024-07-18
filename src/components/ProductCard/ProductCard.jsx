import { useState } from 'react'
import './ProductCard.css'
import { ProductCounter } from '../ProductCounter/ProductCounter'

export const ProductCard = ({
    discount,
    imageUrl,
    category,
    title,
    price
}) => {
    const [isDisabled, setIsDisabled] = useState(false);

    const toggleDisable = () => {
        setIsDisabled(!isDisabled)
    }

    return (
        <div className='ProductCard-root'>
            <span>{discount} off</span>
            <img src={imageUrl} alt="" />
            <p>{category}</p>
            <h4>{title}</h4>
            <p>R$ {price}</p>

            <button onClick={toggleDisable}>Click</button>

            <ProductCounter disabled={isDisabled} />
        </div>
    ) 
}