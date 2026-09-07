import NavBar from "./components/NavBar/NavBar.jsx";
import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router";
import { ProductsDataProvider } from "./components/ProductsContext/ProductContext.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const value = { cart, setCart };
  
  return (
    <ProductsDataProvider>
      <CartContext.Provider value={value}>
        <>
            <NavBar cart={cart}/>
            <Outlet />
        </>
      </CartContext.Provider>
    </ProductsDataProvider>
  )
}

//export default App

const CartContext = createContext({ cart: [], setCart: () => {}});
const useCart = () => useContext(CartContext);

export { App, useCart }
