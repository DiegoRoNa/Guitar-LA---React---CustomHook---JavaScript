// componente principal de la app
import Header from "./components/Header";
import Guitar from "./components/Guitar";
import { useCart } from "./hooks/useCart";

function App() {

  // toda la logica la movi al hook useCart
  const {data, cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, cartIsEmpty, cartTotal} = useCart();

  return (
    <>
      <Header cart={cart} 
              removeFromCart={removeFromCart} 
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              clearCart={clearCart}
              cartIsEmpty={cartIsEmpty}
              cartTotal={cartTotal}
      ></Header> {/*Componente de header*/}

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map(guitar => (
            <Guitar key={guitar.id} guitar={guitar} addToCart={addToCart}></Guitar> // Componente de cada guitarra
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
