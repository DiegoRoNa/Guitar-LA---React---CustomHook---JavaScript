export default function Guitar({guitar, setCart, addToCart}) { // props es una palabra reservada de React

    const {id, name, image, description, price} = guitar

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`./img/${image}.jpg`} alt="imagen guitarra"/>
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                <button type="button" className="btn btn-dark w-100" 
                    onClick={() => addToCart(guitar)}
                    // onClick={() => setCart(prevCart => [...prevCart, guitar]) /*prevCart es el state cart, no es necesario pasarlo como un prop, pero esta forma ofrece poco control sobre la funcion*/}
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}