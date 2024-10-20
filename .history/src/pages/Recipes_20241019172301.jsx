import Header from '../components/Header/index.jsx';
import RecipesCard from '../components/RecipesCard/index.jsx';

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
        <div>
            <Header />
            <h2>This is the RECIPES</h2>
            <div className={styles.recipesGrid}>
                {CATEGORY.map((category, index) => (
                    <RecipesCard key={index} category={category} />
                ))}
            </div>
        </div>
    );
}
