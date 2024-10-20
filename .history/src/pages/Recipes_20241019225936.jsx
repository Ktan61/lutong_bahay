import Header from '../components/Header/index.jsx';
import RecipesCard from '../components/RecipesCard/index.jsx';
import styles from '../styles/Recipes.module.css'; 

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
        <main>
            <Header />
            <div className={styles.recipes}>
                <div className={styles.feature}>
                    <div className={styles.textSection}>
                        <p>Featured Recipe</p>
                        <h1>Sinigang na Baboy</h1>
                        <button className={styles.viewRecipe}>View Recipe</button>
                    </div>
                    <div className={styles.imageSection}>
                        <img 
                            src="https://cdn.shortpixel.ai/spai2/w_1193+q_glossy+ret_img+to_auto/www.hungryhuy.com/wp-content/uploads/pork-sinigang-pot.jpg"
                            alt="Sinigang na Baboy" 
                            className={styles.featureImage}
                        />
                    </div>
                </div>
                <div className={styles.recipesGrid}>
                    {CATEGORY.map((category, index) => (
                        <RecipesCard key={index} category={category} />
                    ))}
                </div>
            </div>
        </main>
    );
}
