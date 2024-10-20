import styles from './RecipesCard.module.css'

export default function RecipesCard() {
    return (
        <div className="recipeCategory">
            <div className="product-image">
                <img src={category.image_url} alt={category.name} />
            </div>
            <p>
              <span className="categoryName">{category.name}</span>
            </p>
            <button className="browseRecipes">Browse Recipes</button>
        </div>
    )
}