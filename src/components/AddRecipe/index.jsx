import React, { useState } from "react";
import styles from "../AddRecipe/AddRecipe.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddRecipe = ({ onAddRecipe }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newRecipe, setNewRecipe] = useState({
    id: "",
    name: "",
    totalCookTime: { hours: 0, minutes: 0 },
    prepTime: { minutes: 0 },
    image: "",
    altText: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handle nested values
    if (name.includes(".")) {
      const [key, subKey] = name.split(".");
      setNewRecipe((prev) => ({
        ...prev,
        [key]: { ...prev[key], [subKey]: value },
      }));
    } else {
      setNewRecipe((prev) => ({ ...prev, [name]: value }));
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
      image: "",
      altText: "",
    });
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
          Include your family recipe to the growing community of Filipino food
          enthusiasts around the world! We all know sharing is caring!
        </p>

        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Recipe Name</Form.Label>
                <input
                  type="text"
                  name="name"
                  placeholder="Recipe Name"
                  value={newRecipe.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Cook Time (Hours)</Form.Label>
                <input
                  type="number"
                  name="totalCookTime.hours"
                  placeholder="Cook Time (Hours)"
                  value={newRecipe.totalCookTime.hours || ""}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Cook Time (Mins)</Form.Label>
                <input
                  type="number"
                  name="totalCookTime.minutes"
                  placeholder="Cook Time (Minutes)"
                  value={newRecipe.totalCookTime.minutes || ""}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
              <Form.Label>Prep Time</Form.Label>
                <input
                  type="number"
                  name="prepTime.minutes"
                  placeholder="Prep Time (Minutes)"
                  value={newRecipe.prepTime.minutes || ""}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Image</Form.Label>
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  value={newRecipe.image}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <input
                  type="text"
                  name="altText"
                  placeholder="Image Alt Text"
                  value={newRecipe.altText}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <button type="submit" className={styles.addRecipe}>
                Add Recipe
              </button>
            </Form>
          </Modal.Body>
        </Modal>

        {/* <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        ></div> */}
      </div>
    </div>
  );
};

export default AddRecipe;
