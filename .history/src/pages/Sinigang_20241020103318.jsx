import styles from '/styles/Sinigang.module.css';
import '@fontsource/berkshire-swash';
import '@fontsource/roboto';
import '@fontsource/koulen';

export default function Navigation() {
    const location = useLocation();

    return (
        <>
        <div className={styles.navigation}>
            SINIGANG!
        </div>
        </>
    )
}