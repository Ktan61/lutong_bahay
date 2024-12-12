import React from 'react';
import styles from './RecipesCard.module.css';
import recipeImages from '/src/assets/images'; // Import the images

export default function RecipesCard({ recipe }) {
  const { name, totalCookTime, prepTime, instructions, altText, mealType } = recipe;

  const formatTime = (time) => {
    if (!time) return 'N/A';
    const { hours = 0, minutes = 0 } = time;
    return `${hours > 0 ? `${hours} hr ` : ''}${minutes > 0 ? `${minutes} min` : ''}`;
  };

  // Use image based on mealType or fallback to a random image
  const recipeImage =
    recipeImages[type] ||
    recipeImages[Object.keys(recipeImages)[Math.floor(Math.random() * Object.keys(recipeImages).length)]];

  return (
    <div className={styles.recipeCategory}>
      <div className={styles.thumbnailContainer}>
        <img
          src={recipe.image || recipeImage}
          alt={altText || name}
          className={styles.thumbnail}
        />
      </div>
      <p className={styles.recipeName}>{name}</p>
      <p className={styles.subhead}>Total Cook Time: <p className={styles.body}>{formatTime(totalCookTime)}</p></p>
      <p className={styles.subhead}>Prep Time: <p className={styles.body}>{formatTime(prepTime)}</p></p>
      <p className={styles.subhead}>Instructions: <p className={styles.body}>{instructions}</p></p>
    </div>
  );
}
