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
console.log(cart);
//const cartList = cart.map(item => <li key={item.id}>{item.count}x {item.title}</li>)
const cartList = cart.map(item => <CartCard key={item.id} item={item} />);
console.log(cartList);
    return(
        <ul className={styles.cardList}>
            {cartList}
        </ul>
    );
}

function CartCard( {item} ) {
    return(
        <li className={styles.card}>
            <img className={styles.cardImg} src={item.image} />
            <div>{item.title}</div>
            <div>x{item.count}</div>
        </li>
    );
}

export default CartPage