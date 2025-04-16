import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function ProductPage() {
    const [product, setProduct] = useState({})


    const { ID } = useParams()

    useEffect(() => {
        async function fetchProduct() {
            const response = await fetch(`https://fakestoreapi.com/products/${ID}`)
            const data = await response.json()
    
            
            setProduct(data)
        }
    
        fetchProduct()
    }, [])
       


    return (
        <div>
            <img src={product.image} alt="Solar pannels"/>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>

        </div>
    )
}