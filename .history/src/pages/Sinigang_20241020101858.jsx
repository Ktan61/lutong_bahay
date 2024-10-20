import styles from '/styles/Sinigang.module.css';
import { useLocation } from 'react-router-dom';
import '@fontsource/berkshire-swash';
import '@fontsource/roboto';
import '@fontsource/koulen';

export default function Navigation() {
    const location = useLocation();

    return (
        <>
        <div className={styles.navigation}>
            <ul className={styles.linksList}>
                <a href={`/`} className={location.pathname === "/" ? styles.active : ""}>Home</a>
                <a href={`/recipes`} className={location.pathname === "/recipes" ? styles.active : ""}>Recipes</a>
                <a href={`/forum`} className={location.pathname === "/forum" ? styles.active : ""}>Forum</a>
                <a href={`/shoppinglist`} className={location.pathname === "/shoppinglist" ? styles.active : ""}>Shopping List</a>
            </ul>
        </div>
        </>
    )
}