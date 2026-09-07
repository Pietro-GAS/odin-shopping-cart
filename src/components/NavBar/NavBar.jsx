import { NavLink } from "react-router";
import styles from "./NavBar.module.css";

export default function NavBar({ cart }) {
    const emptyCart = cart.length === 0 ? true : false;  
    const cartSize = cart.reduce(
        (accumulator, currentValue) => accumulator + currentValue.count,
        0,
    );
    const cartHeading = emptyCart ? `Cart` : `Cart (${cartSize})`;
    return(
        <nav className={styles.navbar}>
            <NavLink to="/" className={
                ({ isActive }) => isActive ? `${styles.link} ${styles.active}`: styles.link
                }
            >Home</NavLink>
            <NavLink to="shop" className={
                ({ isActive }) => isActive ? `${styles.link} ${styles.active}`: styles.link
                }
            >Shop</NavLink>
            <NavLink to="cart" className={
                ({ isActive }) => isActive ? `${styles.link} ${styles.active}`: styles.link
                }
            >{ cartHeading }</NavLink>
        </nav>
    );
}