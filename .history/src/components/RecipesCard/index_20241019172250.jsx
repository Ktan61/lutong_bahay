import styles from './RecipesCard.module.css';

export default function RecipesCard({ category }) {
    return (
        <div className={styles.recipeCategory}>
            <div className={styles.categoryImage}>
                <img src={category.image_url} alt={category.name} className={styles.thumbnail} />
            </div>
            <p>
                <span className={styles.categoryName}>{category.name}</span>
            </p>
            <button className={styles.browseRecipes}>Browse Recipes</button>
        </div>
    );
}
