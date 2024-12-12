import Header from '../components/Header/index.jsx';
import styles from '../styles/PancitPalabok.module.css';
import '@fontsource/berkshire-swash';
import '@fontsource/roboto';
import '@fontsource/koulen';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import recipesData from '../data/list_recipes.json';

var jsonRecipe = {
    "recipes": [
        {
          "id": "1",
          "name": "Sinigang",
          "image": "/images_shoppingList/sinigang.png",
          "altText": "pot of sinigang soup surrounded by ingredients",
          "category": "soups",
          "serves": "4 servings",
          "ingredients": [
           
          ],
          "equipment": [
            ["stainless steel strainer"],
            ["cast iron dutch oven", "6.75 qt"]
          ],
          "totalCookTime": { "hours": 1, "minutes": 5 },
          "prepTime": { "minutes": 20 }
        },
        {
          "id": "2",
          "name": "Halo Halo",
          "image": "/images_shoppingList/halohalo.png",
          "altText": "a serving of Halo halo for two",
          "category": "desserts",
          "serves": "4 servings",
          "ingredients": [
            
          ],
          "equipment": [
            ["medium saucepan"],
            ["fine-mesh strainer"],
            ["paring knife"],
            ["large saucepan"],
            ["medium bowl"],
            ["measuring cups and spoons"],
            ["cutting board"],
            ["shave ice machine"]
          ],
          "totalCookTime": { "minutes": 20 },
          "prepTime": { "minutes": 15 }
        },
        {
            "id": "3",
            "name": "Pancit Palabok",
            "image": "/images_shoppingList/pancitpalabok.png",
            "altText": "a plate of pancit palabok",
            "category": "mains",
            "serves": "4 servings",
            "ingredients": [
              
            ],
            "totalCookTime": { "minutes": 20 },
            "prepTime": { "hours": 1 }
          }
      ]};

export default function PancitPalabok() {
    const [checkedIngredients, setCheckedIngredients] = useState({});

    const recipe = recipesData.recipes.find((recipe) => recipe.id === "3");

    const handleCheckboxChange = (ingredient, quantity, specialty) => {
        if (localStorage.length !== 0) {
            jsonRecipe = JSON.parse(localStorage.getItem('recipe'));
        }
        jsonRecipe.recipes[2].ingredients.push([ingredient, quantity, specialty]);
        localStorage.setItem('recipe', JSON.stringify(jsonRecipe))
        window.dispatchEvent(new Event('storage-update'));
        setCheckedIngredients((prev) => ({
            ...prev,
            [ingredient]: !prev[ingredient],
        }));
    };

    if (!recipe) {
        return <p>Recipe not found</p>;
    }

    const {
        ingredients = [],
        equipment = [],
        instructions = [],
        image,
        altText,
        name,
        serves,
        category,
        prepTime = {},
        totalCookTime = {},
    } = recipe;

    return (
        <>
            <Header />
            <div className={styles.pancitPalabokPage}>
                <div className={styles.banner}>
                    <img src={image} alt={altText} className={styles.bannerImage} />
                </div>
                <div>
                    <h1 className={styles.name}>{name}</h1>
                    <h3>A delicious Filipino noodle dish with rich flavors.</h3>
                    <div className={styles.keyInfo}>
                        <div className={styles.infoChips}>
                            <p>Serves | <strong>{serves}</strong></p>
                        </div>
                        <div className={styles.infoChips}>
                            <p>Category | <strong>{category}</strong></p>
                        </div>
                        <div className={styles.infoChips}>
                            <p>Prep Time | <strong>{prepTime.hours || 0} hr {prepTime.minutes || 0} mins</strong></p>
                        </div>
                        <div className={styles.infoChips}>
                            <p>Cook Time | <strong>{totalCookTime.hours || 0} hr {totalCookTime.minutes || 0} mins</strong></p>
                        </div>
                    </div>
                    <p>Experience the authentic taste of Pancit Palabok with all its toppings and sauce.</p>
                </div>
                <div className={styles.ingredientsSection}>
                    <h1 className={styles.ingredientsLabel}>Ingredients</h1>
                    <div className={styles.ingredientsList}>
                        <ul className={styles.ingredientsGrid}>
                            {ingredients.map(([ingredient, quantity, specialty], index) => (
                                <li key={index}>
                                    <label className={styles.customCheckbox}>
                                        <input
                                            type="checkbox"
                                            checked={!!checkedIngredients[ingredient]}
                                            onChange={() => handleCheckboxChange(ingredient, quantity, specialty)}
                                        />
                                        <span className={styles.checkmark}></span>
                                        {`${ingredient} - ${quantity || ''}`}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link to="/ShoppingList">
                        <button className={styles.addShop}>Add to Shopping List</button>
                    </Link>
                    
                    {equipment.length > 0 && (
                        <div>
                            <h4>Equipment</h4>
                            <ul className={styles.sinigangList}>
                                {equipment.map(([item], index) => (
                                    <li key={index}>
                                        <label className={styles.customCheckbox}>
                                            <input
                                                type="checkbox"
                                                checked={!!checkedIngredients[item]}
                                                onChange={() => handleCheckboxChange(item)}
                                            />
                                            <span className={styles.checkmark}></span>
                                            {item}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className={styles.stepsSection}>
                    <h1 className={styles.stepsLabel}>Instructions</h1>
                    <div className={styles.stepsDetails}>

                        <div className={styles.stepsColumn}>
                            <ol className={styles.stepsList}>
                                {instructions.slice(0, 10).map((instruction, index) => (
                                    <li key={index} className={styles.stepsItem}>
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
                            <ol start={11} className={styles.stepsList}>
                                {instructions.slice(10).map((instruction, index) => (
                                    <li key={index + 10} className={styles.stepsItem}>
                                        <div>
                                            <span className={styles.stepNumber}>{index + 11}. </span>
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
