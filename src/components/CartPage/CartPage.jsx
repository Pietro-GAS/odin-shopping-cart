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
    
    return(
        <p>WORK IN PROGRESS...</p>
    );
}

export default CartPage