import React from "react"
import ProductCard from "../products/ProductCard"

export default function HomePage() {

    async function FetchProducts() {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()  // to Javascript
        //  use3 the hook to store the data and then we wil use it in html
    }

    FetchProducts()
    
    return (
        <div>
            <ProductCard title="Test Product" descrition="This is a test product" price="KES 20" image="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"/>

            <ProductCard title="Test Product2" descrition="This is a test product2" price="KES 40" image="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"/>
        </div>
    )
}





useState Hook in React !!!!
tenary operator in javascript


1. UseState Hook    !!!
2. useEffect  Hook  !!!
3. useRef Hook
4. useContext
5. useMemo
