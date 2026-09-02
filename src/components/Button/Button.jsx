import { Link } from "react-router";
import styles from "./Button.module.css";

export default function Button({ type }) {
    const label = type[0].toUpperCase() + type.slice(1);
    const target = type === "home" ? "/" : type;

    return(
        <button className={styles.btn}>
            <Link to={target}>{label}</Link>
        </button>
    );
}