import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import styles from "./AddRecipe.module.css"; // Assuming custom styles
import recipeImages from "../../assets/images";

const AddRecipe = ({ onAddRecipe }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    id: "",
    name: "",
    totalCookTime: { hours: 0, minutes: 0 },
    prepTime: { minutes: 0 },
    image: recipeImages.breakfast,
    instructions: "",
    type: "breakfast",
  });

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the image when the meal type changes
    if (name === "type") {
      setNewRecipe((prev) => ({
        ...prev,
        [name]: value,
        image: recipeImages[value], // Dynamically set the image
      }));
    } else {
      // Handle nested or other values
      if (name.includes(".")) {
        const [key, subKey] = name.split(".");
        setNewRecipe((prev) => ({
          ...prev,
          [key]: { ...prev[key], [subKey]: value },
        }));
      } else {
        setNewRecipe((prev) => ({ ...prev, [name]: value }));
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const recipeWithId = { ...newRecipe, id: Date.now().toString() }; // Assign unique ID
    onAddRecipe(recipeWithId);
    setNewRecipe({
      id: "",
      name: "",
      totalCookTime: { hours: 0, minutes: 0 },
      prepTime: { minutes: 0 },
      type: "breakfast",
      image: mealTypeImages.breakfast,
      altText: "",
    });
    handleCloseModal();
  };


  return (
    <div className={styles.feature}>
      <div className={styles.imageSection}>
        <img
          src="../../public/addRecipe.webp"
          alt="Add Recipe"
          className={styles.featureImage}
        />
      </div>
      <div className={styles.addTextSection}>
        <h1 className={styles.headingCat}>
          Have a family recipe you're excited to share?
        </h1>
        <p>
          Include your family recipe in the growing community of Filipino food
          enthusiasts around the world! We all know sharing is caring!
        </p>

        <button className={styles.button} onClick={handleOpenModal}>
          Add A Recipe
        </button>

        {isModalOpen && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h2>Add Recipe</h2>
                <button
                  className={styles.button}
                  type="button"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <legend>Recipe Name</legend>
                  <input
                    type="text"
                    name="name"
                    placeholder="Recipe Name"
                    value={newRecipe.name}
                    onChange={handleInputChange}
                    required
                  />
                </fieldset>
                <fieldset>
                  <legend>Cook Time (Hours)</legend>
                  <input
                    type="number"
                    name="totalCookTime.hours"
                    placeholder="Cook Time (Hours)"
                    value={newRecipe.totalCookTime.hours || ""}
                    onChange={handleInputChange}
                    required
                  />
                </fieldset>
                <fieldset>
                  <legend>Cook Time (Minutes)</legend>
                  <input
                    type="number"
                    name="totalCookTime.minutes"
                    placeholder="Cook Time (Minutes)"
                    value={newRecipe.totalCookTime.minutes || ""}
                    onChange={handleInputChange}
                    required
                  />
                </fieldset>
                <fieldset>
                  <legend>Prep Time (Minutes)</legend>
                  <input
                    type="number"
                    name="prepTime.minutes"
                    placeholder="Prep Time (Minutes)"
                    value={newRecipe.prepTime.minutes || ""}
                    onChange={handleInputChange}
                    required
                  />
                </fieldset>
                <fieldset>
                  <legend>Instructions</legend>
                  <textarea
                    name="instructions"
                    placeholder="What are the steps!"
                    value={newRecipe.instructions}
                    onChange={handleInputChange}
                    required
                  />
                </fieldset>
                <fieldset>
                  <legend>Breakfast / Lunch / Dinner / Dessert?</legend>
                  <select
                    name="type"
                    id="type"
                    value={newRecipe.type}
                    onChange={handleInputChange}
                  >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="dessert">Dessert</option>
                  </select>
                </fieldset>
                <button className={styles.button} type="submit">
                  Add Recipe
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddRecipe;
