export default function ProductCard({title, description, price, image}) {

    return (
        <div className="prod-container">
            <img className="prod-img"  src={image} alt="image title" />
            <h3 className="title">{title}</h3>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
}
// Ternary operator

// if (true) {
//     console.log("after question mark")
// } else {
//     console.log("after colon")
// }