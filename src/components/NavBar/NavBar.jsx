import Button from "../Button/Button.jsx";
import { NavLink } from "react-router";
import styles from "./NavBar.module.css";

export default function NavBar() {
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
            >Cart</NavLink>
        </nav>
    );
}