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
        <h3>All you need in one place</h3>
        <div className={styles.recipeList}>
          {recipes.map((recipe, index) => (
            <div key={index} className={styles.recipeCard}>
              <img
                className={styles.recipeImg}
                src={`src/images_shoppingList/recipes/recipe${index + 1}.jpg`}
                alt={recipe.title}
              />
              <p className={styles.description}>{recipe.description}</p>
              <button className={styles.featuredButton}>{recipe.title}</button>
            </div>
            
          ))}

        </div>
        <div className={styles.blueBar}></div>
      </section>
    );
  };

export default FeaturedRecipes;
