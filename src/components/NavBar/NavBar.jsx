import Button from "../Button/Button.jsx";
import { Link } from "react-router";
import styles from "./NavBar.module.css";

export default function NavBar() {
    return(
        //<div className={styles.navbar}>
        //    <Button type={"home"} />
        //    <Button type={"shop"} />
        //    <Button type={"cart"} />
        //</div>
        <ul className={styles.navbar}>
            <li className={styles.btn}><Link to="/" className={styles.link}>Home</Link></li>
            <li className={styles.btn}><Link to="shop" className={styles.link}>Shop</Link></li>
            <li className={styles.btn}><Link to="cart" className={styles.link}>Cart</Link></li>
        </ul>
    );
}