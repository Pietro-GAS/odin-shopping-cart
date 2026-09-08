import { useState } from "react";
import { useCart } from "../../App";
import styles from "./CartPage.module.css"

function CartPage() {
    return(
        <div className={styles.cartPage}>
            <h1>Cart Page</h1>
            <CartContainer />
        </div>
    );
}

function CartContainer() {
    const { cart, setCart } = useCart();
    const cartList = cart.map(item => <CartCard key={item.id} item={item} />);
    console.log(cartList);
    
    if (cart.length === 0) return <div className={styles.emptyCart}>Your cart is empty.</div>
    
    return(
        <ul className={styles.cardList}>
            {cartList}
        </ul>
    );
}

function CartCard( {item} ) {
    const [selected, setSelected] = useState(item.count);
    const { cart, setCart } = useCart();
    
    const enabled = item.count > 1;
    
    const increment = (e) => {
        e.preventDefault();
        const current = selected;
        setSelected(current + 1);
        changeCart(current + 1);
    };

    const decrement = (e) => {
        e.preventDefault();
        const current = selected;
        if (current > 0) setSelected(current - 1);
        changeCart(current - 1);
    };

    const removeFromCart = (e) => {
        e.preventDefault();
        const newCart = cart.filter(product => product.title !== item.title);
        setCart(newCart);
    }

    const changeCart = (num) => {
        const newCart = [...cart];
        newCart.find(product => product.title === item.title).count = num;
        setCart(newCart);
    }
    
    return(
        <li className={styles.card}>
            <img className={styles.cardImg} src={item.image} />
            <div><h4>{item.title}</h4></div>
            <div className={styles.cardBtn}>
                <button className={styles.btn} onClick={decrement} disabled={!enabled}>-</button>
                <div><h4>x{selected}</h4></div>
                <button className={styles.btn} onClick={increment}>+</button>
                <button className={styles.deleteBtn} onClick={removeFromCart}>x</button>
            </div>
        </li>
    );
}

export default CartPage