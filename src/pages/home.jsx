import { useState, useEffect } from "react"
import ProductCard from "../products/ProductCard"

export default function HomePage() {

    const [products, setProducts] = useState([])



    
    

    useEffect( () => {
        async function FetchProducts() {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()  // to Javascript
            setProducts(data)
        }
    
        FetchProducts()
    }, [])

    


    
    return (
        <div className="products-container">
            {products.map((product) => (
                    <ProductCard key={product.id} title={product.title} descrition={product.description} price={product.price} image={product.image}/>
                )
            )}  
        </div>
    )
}





// useState Hook in React !!!!
// Reusable components in react !!
// tenary operator in javascript


// 1. UseState Hook    !!!
// 2. useEffect  Hook  !!!
// 3. useRef Hook
// 4. useContext
// 5. useMemo
