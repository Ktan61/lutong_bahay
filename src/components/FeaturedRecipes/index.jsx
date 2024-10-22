import React from 'react';
import styles from './FeaturedRecipes.module.css';

  const recipes = [
    {
      title: 'Recipes',
      description: 'Find recipes and instructional videos to cook your favourites.'
    },
    {
      title: 'Forum',
      description: 'Share your own personal recipes and thoughts.'
    },
    {
      title: 'Shopping List',
      description: 'Save your recipes and find stores that sell specialty items.'
    }
  ];

  const FeaturedRecipes = () => {
    return (
      <section className={styles.featuredSection}>
        <h3 className={styles.recipeHeader}>All you need in one place</h3>
        <div className={styles.recipeList}>
          {recipes.map((recipe, index) => (
            <div key={index} className={styles.recipeCard}>
              <img
                className={styles.recipeImg}
                src={`src/recipes/recipe${index + 1}.jpg`}
                alt={recipe.title}
              />
              <p className={styles.recipeDescription}>{recipe.description}</p>
              <button className={styles.featuredButton}>{recipe.title}</button>
            </div>
            
          ))}

        </div>
        <div className={styles.blueBar}></div>
      </section>
    );
  };

  
export default FeaturedRecipes;
