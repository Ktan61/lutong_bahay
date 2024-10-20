import Header from '../components/Header/index.jsx';
import RecipesCard from '../components/RecipesCard/index.jsx';
import styles from '../styles/Recipes.module.css';
import { Link } from 'react-router-dom';

const CATEGORY = [
    {
        name: "Main Dishes",
        image_url: "https://cdn.shortpixel.ai/spai2/w_1193+q_glossy+ret_img+to_auto/www.hungryhuy.com/wp-content/uploads/pork-sinigang-pot.jpg",
    },
    {
        name: "Snacks",
        image_url: "https://cdn.shortpixel.ai/spai2/w_1193+q_glossy+ret_img+to_auto/www.hungryhuy.com/wp-content/uploads/puto-w-cheese.jpg",
    },
    {
        name: "Soups & Stews",
        image_url: "https://cdn.shortpixel.ai/spai2/w_1193+q_glossy+ret_img+to_auto/www.hungryhuy.com/wp-content/uploads/kare-kare-vertical.jpg",
    },
    {
        name: "Desserts & Drinks",
        image_url: "https://www.hungryhuy.com/wp-content/uploads/halo-halo-w-leche-flan2.jpg",
    }
];

export default function Recipes() {
    return (
        <>
            <Header />
            <div className={styles.body}>
                <div className={styles.recipes}>
                    <div className={styles.feature}>
                        <div className={styles.textSection}>
                            <p>Featured Recipe</p>
                            <h1 className={styles.name}>Sinigang <br /> na Baboy</h1>
                            <Link to="/sinigang">
                                <button className={styles.viewRecipe}>View Recipe</button>
                            </Link>
                        </div>
                        <div className={styles.imageSection}>
                            <img 
                                src="https://cdn.shortpixel.ai/spai2/w_1193+q_glossy+ret_img+to_auto/www.hungryhuy.com/wp-content/uploads/pork-sinigang-pot.jpg"
                                alt="Sinigang na Baboy" 
                                className={styles.featureImage}
                            />
                        </div>
                    </div>
                    <h1 className={styles.headingCat}>Our Categories</h1>
                    <div className={styles.recipesGrid}>
                        {CATEGORY.map((category, index) => (
                            <RecipesCard key={index} category={category} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
