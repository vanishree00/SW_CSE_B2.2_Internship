export function ProductCard({name, price, image}){
    return(
        <div className="card">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <h6>Rs. {price}</h6>

        </div>
    )
}