import Header from '../components/Header/index.jsx'
import ShoppingListCard from '../components/ShoppingListCard/index.jsx'
import styles from '../styles/ShoppingList.module.css'; 
import SearchIcon from '@mui/icons-material/Search';
import recipe_list from '../data/list_recipes.json'
import '@fontsource/berkshire-swash';
import '@fontsource/poppins';
import '@fontsource/koulen';

export default function ShoppingList() {

    const recipes = recipe_list.recipes;

    return(
        <>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>Shopping List</h1>
                <section className={styles.sortButtons}>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>All Items</button>
                        <button className={styles.button} style={{backgroundColor: 'var(--yellow)'}}>By Recipe</button>
                        <button className={styles.button}>By Store</button>
                        <button className={styles.button}>Total Cook Time</button>
                    </div>
                    <div className={styles.search}>
                            <input type="text" />
                            <SearchIcon className={styles.searchIcon}fontSize="medium"/>
                    </div>
                </section>
                <section className={styles.cardContainer}>
                    {recipes.map((listItems, index) => (
                    <ShoppingListCard 
                        key={index} 
                        myShoppingList={listItems} />
                    ))} 
                </section>
            </div>
        </>
    )
}

