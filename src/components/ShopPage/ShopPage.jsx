import styles from "./ShopPage.module.css";

function ShopPage() {
    return(
        <>
            <h1>Shop Page</h1>
            <Container></Container>
        </>
    )
}

function Container() {
    const list = [
        "Object 1", "Object 2", "Object 3", "Object 4", "Object 5", 
        "Object 6", "Object 7", "Object 8", "Object 9", "Object 10", 
        "Object 11", "Object 12", "Object 13", "Object 14", "Object 15", 
        "Object 16", "Object 17", "Object 18", "Object 19", "Object 20", 
    ];
    const itemList = list.map(object => <li><ItemCard name={object}></ItemCard></li>)
    
    return(
        <ul className={styles.container}>
            {itemList}
        </ul>
    );
}

function ItemCard({ name }) {
    return(
        <div className={styles.card}>
            <h3>{name}</h3>
            <p>Product image</p>
            <p>Add to cart</p>
        </div>
    );
}

export default ShopPage