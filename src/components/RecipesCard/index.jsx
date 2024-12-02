import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipesCard.module.css';

export default function RecipesCard({ recipe }) {
  const { name, totalCookTime, prepTime, image, altText } = recipe;

  const formatTime = (time) => {
    if (!time) return 'N/A';
    const { hours = 0, minutes = 0 } = time;
    return `${hours > 0 ? `${hours} hr ` : ''}${minutes > 0 ? `${minutes} min` : ''}`;
  };

  // Map recipe names to the correct paths
  const recipePaths = {
    Sinigang: '/sinigang',
    'Halo Halo': '/halohalo',
    'Pancit Palabok': '/pancitPalabok',
  };

  return (
    <div className={styles.recipeCategory}>
      <div className={styles.thumbnailContainer}>
        <img src={image} alt={altText || name} className={styles.thumbnail} />
      </div>
      <p className={styles.recipeName}>{name}</p>
      <p>Total Cook Time: {formatTime(totalCookTime)}</p>
      <p>Prep Time: {formatTime(prepTime)}</p>
      <Link to={recipePaths[name]}>
        <button className={styles.browseRecipes}>View Recipe</button>
      </Link>
    </div>
  );
}
