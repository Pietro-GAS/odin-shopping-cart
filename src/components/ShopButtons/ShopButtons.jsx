import styles from "./ShopButtons.module.css";
import { useState } from "react";
import { useCart } from "../../App";

function ShopButtons({ product }) {
    const [selected, setSelected] = useState(0);
    const { cart, setCart } = useCart();
    
    const increment = (e) => {
    e.preventDefault();
    const current = selected;
    setSelected(current + 1);
    };

    const decrement = (e) => {
        e.preventDefault();
        const current = selected;
        if (current > 0) setSelected(current - 1);
    };

    const handleChange = (e) => {
        e.preventDefault();
        setSelected(Number(e.target.value));
    }

    const addToCart = (e) => {
        e.preventDefault();
        if (cart.some(item => item.title === product.title)) {
            const newCart = [...cart];
            newCart.find(item => item.title === product.title).count += selected;
            setCart(newCart);
        } else {
            const newCart = [...cart, {title: product.title, count: selected}];
            setCart(newCart);
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.itemButtons}>
                <button onClick={decrement}>-</button>
                <input className={styles.itemNum} value={selected} onChange={handleChange}></input>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    );
}

export default ShopButtons;