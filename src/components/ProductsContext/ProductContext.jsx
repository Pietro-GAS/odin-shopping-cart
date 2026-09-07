import { createContext, useContext, useState, useEffect } from "react";
import { data } from "react-router";

const Context = createContext();

export const ProductsDataProvider = ({ children }) => {
    const [products, setProducts] = useState();
    //const [cart, setCart] = useState();

    useEffect(() => {
        async function fetchProducts() {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProducts(data))
            //.then(data => setCart(data.map(item => Object.fromEntries([["title", item.title], ["count", 0]]))));
        };
        fetchProducts();
    }, []);

    return(
        <Context.Provider value={products}>
            {children}
        </Context.Provider>
    );
}

export const useProducts = () => useContext(Context);