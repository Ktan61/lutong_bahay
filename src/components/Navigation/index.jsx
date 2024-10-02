import styles from './Navigation.module.css'

export default function Navigation() {
    return (
        <div className={styles.navigation}>
            <ul className={styles.linksList}>
                <a href={`/`}>Home</a>
                <a href={`/recipes`}>Recipes</a>
                <a href={`/forum`}>Forum</a>
                <a href={`/shoppinglist`}>Shopping List</a>
            </ul>
        </div>
    )
}