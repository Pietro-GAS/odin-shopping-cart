import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const ProductsDataProvider = ({ children }) => {
    const [products, setProducts] = useState();

    useEffect(() => {
        async function fetchProducts() {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProducts(data))
        };
        fetchProducts();
    }, []);

    return(
        <Context value={products}>
            {children}
        </Context>
    );
}

export const useProducts = () => useContext(Context);