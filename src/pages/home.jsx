export default function HomePage() {

    async function FetctProducts() {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()  // to Javascript
        console.log(data)
    }

    FetctProducts()

    
    return (
        <div>
            <h1>Products</h1>
        </div>
    )
}





