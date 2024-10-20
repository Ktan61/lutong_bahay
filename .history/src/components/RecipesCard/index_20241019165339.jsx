import styles from './RecipesCard.module.css'

export default function RecipesCard({category}) {
    return (
        <div className="recipeCategory">
            <div className="category-image">
                <img src={category.image_url} alt={category.name} />
            </div>
            <p>
              <span className="categoryName">{category.name}</span>
            </p>
            <button className="browseRecipes">Browse Recipes</button>
        </div>
    )
}