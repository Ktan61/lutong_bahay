import Header from '../components/Header/index.jsx';
import styles from '../styles/Sinigang.module.css';
import '@fontsource/berkshire-swash';
import '@fontsource/roboto';
import '@fontsource/koulen';
import React, { useState } from 'react';

import recipesData from '../data/list_recipes.json';

export default function HaloHalo() {
    const [checkedIngredients, setCheckedIngredients] = useState({});
    const recipe = recipesData.recipes.find((recipe) => recipe.id === "2");

    const handleCheckboxChange = (ingredient) => {
        setCheckedIngredients((prev) => ({
            ...prev,
            [ingredient]: !prev[ingredient],
        }));
    };

    if (!recipe) {
        return <p>Recipe not found</p>;
    }

    return (
        <>
            <Header />
            <div className={styles.sinigangPage}>
                <div className={styles.banner}>
                    <img src={recipe.image} alt={recipe.altText} className={styles.bannerImage} />
                </div>
                <div>
                    <h1 className={styles.name}>{recipe.name}</h1>
                    <h3>A famous Filipino dessert made of shaved ice, milk, and a variety of mix-in layers.</h3>
                    <div className={styles.keyInfo}>
                        <div className={styles.infoChips}>
                            <p>Serves | <strong>{recipe.serves}</strong></p>
                        </div>
                        <div className={styles.infoChips}>
                            <p>Category | <strong>{recipe.category}</strong></p>
                        </div>
                        <div className={styles.infoChips}>
                            <p>Prep Time | <strong>{recipe.prepTime.minutes} mins</strong></p>
                        </div>
                        <div className={styles.infoChips}>
                            <p>Cook Time | <strong>{recipe.totalCookTime.hours} hr {recipe.totalCookTime.minutes} mins</strong></p>
                        </div>
                    </div>
                    <p>Usually served in a tall glass and mixed with a spoon before eating, it helps with the warm summer days!</p>
                </div>
                <div className={styles.ingredientsSection}>
                    <h1 className={styles.ingredientsLabel}>Ingredients</h1>
                    <div className={styles.ingredientsList}>
                        <div>
                            <h4>Ingredients</h4>
                            <ul className={styles.sinigangList}>
                                {recipe.ingredients.map(([ingredient, quantity], index) => (
                                    <li key={index}>
                                        <label className={styles.customCheckbox}>
                                            <input
                                                type="checkbox"
                                                checked={!!checkedIngredients[ingredient]}
                                                onChange={() => handleCheckboxChange(ingredient)}
                                            />
                                            <span className={styles.checkmark}></span>
                                            {`${ingredient} - ${quantity || ''}`}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4>Equipment</h4>
                            <ul className={styles.sinigangList}>
                                {recipe.equipment.map(([equipment], index) => (
                                    <li key={index}>
                                        <label className={styles.customCheckbox}>
                                            <input
                                                type="checkbox"
                                                checked={!!checkedIngredients[equipment]}
                                                onChange={() => handleCheckboxChange(equipment)}
                                            />
                                            <span className={styles.checkmark}></span>
                                            {equipment}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.stepsSection}>
                    <h1 className={styles.stepsLabel}>Instructions</h1>
                    <div className={styles.stepsDetails}>
                        <div className={styles.stepsColumn}>
                            <ol className={styles.stepsList}>
                                {recipe.instructions.slice(0, 5).map((instruction, index) => (
                                    <li key={index + 1} className={styles.stepsItem}>
                                        <div>
                                            <span className={styles.stepNumber}>{index + 1}. </span>
                                            {instruction.step}
                                        </div>
                                        {instruction.image && (
                                            <img
                                                src={instruction.image}
                                                alt={instruction.altText}
                                                className={styles.stepsImage}
                                            />
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className={styles.stepsColumn}>
                            <ol start={6} className={styles.stepsList}>
                                {recipe.instructions.slice(5).map((instruction, index) => (
                                    <li key={index + 6} className={styles.stepsItem}>
                                        <div>
                                            <span className={styles.stepNumber}>{index + 6}. </span>
                                            {instruction.step}
                                        </div>
                                        {instruction.image && (
                                            <img
                                                src={instruction.image}
                                                alt={instruction.altText}
                                                className={styles.stepsImage}
                                            />
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}
