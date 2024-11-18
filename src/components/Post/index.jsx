import { useState } from 'react';
import styles from './Post.module.css';

export default function Editor({ setPosts }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [heading, setHeading] = useState("");
    const [paragraph, setParagraph] = useState("");
    const [description, setDescription] = useState("");

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            heading,
            description,
            paragraph,
            liked: false, // Add liked property
        };

        // Update posts in parent component (Forum)
        setPosts(prevPosts => [...prevPosts, newPost]);

        setHeading("");
        setParagraph("");
        setDescription("");
        setModalOpen(false);
    };

    return (
        <div>
            <div className={styles.pleaseWork}>
                <div className={styles.pfp}></div>
                <button className={styles.postInput} type="button" onClick={handleOpenModal}>Write a post...</button>
            </div>

            {isModalOpen && (
                <div className={styles.modal}> 
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h2>Add Content</h2>
                            <button className={styles.button2} type="button" onClick={handleCloseModal}>X</button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <legend>Name of Food</legend>
                                <input 
                                    type="text" 
                                    name="heading" 
                                    value={heading}
                                    onChange={(e) => setHeading(e.target.value)}
                                />
                            </fieldset>
                            <fieldset>
                                <legend>Description</legend>
                                <textarea 
                                    rows="5" 
                                    cols="50" 
                                    name="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </fieldset>
                            <fieldset>
                                <legend>Ingredients & Recipe</legend>
                                <textarea 
                                    rows="5" 
                                    cols="50" 
                                    name="recipe"
                                    value={paragraph}
                                    onChange={(e) => setParagraph(e.target.value)}
                                ></textarea>
                            </fieldset>
                            <button className={styles.button} type="submit">Post Content</button>
                        </form>
                    </div>
                </div>
            )}

            <div className={styles.titleSection}>
                <h2>All Posts</h2>
            </div>
        </div>
    );
}
