import Header from '../components/Header/index.jsx';
import RecipesCard from '../components/RecipesCard';
import styles from '../styles/Recipes.module.css';
import { Link } from 'react-router-dom';
import AddRecipe from "../components/AddRecipe/index.jsx"
import { useState } from 'react';

const RECIPES = [
  {
    id: "1",
    name: "Sinigang",
    totalCookTime: { hours: 1, minutes: 5 },
    prepTime: { minutes: 20 },
    image: "/images_shoppingList/sinigang.png",
    altText: "Pot of Sinigang soup surrounded by ingredients",
  },
  {
    id: "2",
    name: "Halo Halo",
    totalCookTime: { minutes: 20 },
    prepTime: { minutes: 15 },
    image: "/images_shoppingList/halohalo.png",
    altText: "A serving of Halo-Halo",
  },
  {
    id: "3",
    name: "Pancit Palabok",
    totalCookTime: { minutes: 20 },
    prepTime: { hours: 1 },
    image: "/images_shoppingList/pancitpalabok.png", 
    altText: "Plate of Pancit Palabok",
  }
];

export default function Recipes() {
  const [userRecipes, setUserRecipes] = useState([]); // For user-created recipes

  const handleAddRecipe = (newRecipe) => {
    setUserRecipes([...userRecipes, newRecipe]);
  };




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
          <h1 className={styles.headingCat}>Our Recipes</h1>
          <div className={styles.recipesGrid}>
            {RECIPES.map((recipe) => (
              <RecipesCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>

        <h1 className={styles.headingCat}>Your Recipes</h1>
        <div className={styles.recipes}>
          <AddRecipe onAddRecipe={handleAddRecipe} />
        </div>
        <div className={styles.recipesGrid}>
          {userRecipes.length > 0 ? (
            userRecipes.map((recipe) => (
              <RecipesCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p>No recipes added yet. Use the form below to add your recipe!</p>
          )}
        </div>



      </div>
    </>
  );
}
