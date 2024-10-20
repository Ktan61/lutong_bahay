import { useState } from "react";
import styles from './Post.module.css';
import Post from './post';

export default function Editor() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [heading, setHeading] = useState("");
    const [paragraph, setParagraph] = useState("");
    const [description, setDescription] = useState("");
    const [posts, setPosts] = useState([]); // State to hold the posts

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
        };

        setPosts([...posts, newPost]);

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
                        <h2>Add Content</h2>
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
                            <button type="submit">Post Content</button>
                            <button type="button" onClick={handleCloseModal}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}

            <div className={styles.titleSection}>
                <h2>All Posts</h2>
            </div>

            <div className={styles.postOutput}>
                {posts.map((post, index) => (
                    <Post
                        key={index} 
                        heading={post.heading}
                        description={post.description}
                        paragraph={post.paragraph}
                    />
                ))}
            </div>
        </div>
    );
}
