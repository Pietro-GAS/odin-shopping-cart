import { useProducts } from "../ProductsContext/ProductContext";
import ShopButtons from "../ShopButtons/ShopButtons";
import styles from "./ShopPage.module.css";

function ShopPage() {
    return(
        <div className={styles.shopPage}>
            <h1>Shop Page</h1>
            <CardContainer></CardContainer>
        </div>
    )
}

function CardContainer() {
    const products = useProducts();
    if (!products) return <p><b>LOADING...</b></p>;
    
    const itemList = products.map(product => <li key={product.id}><ItemCard product={product}></ItemCard></li>);
    
    return(
        <ul className={styles.container}>
            {itemList}
        </ul>
    );
}

function ItemCard({ product }) {
    return(
        <div className={styles.card}>
            <h4 className={styles.cardTitle}>{product.title}</h4>
            <img className={styles.cardImg} src={product.image}></img>
            <ShopButtons product={product}></ShopButtons>
        </div>
    );
}

export default ShopPage