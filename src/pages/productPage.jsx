import { useParams } from "react-router-dom"

export default function ProductPage() {

    const { productID } = useParams()
    
    fetch(`https://fakestoreapi.com/products/${productID}`)


    return (
        <div>
            <img src="/fam.jpg" alt="Solar pannels"/>
            <h1>Solar Pannels</h1>
            <p>Ksh 2,000</p>
            <p>This are solar pannels from China. They are very efficient and last for years after a whole day charge.</p>
        </div>
    )
}