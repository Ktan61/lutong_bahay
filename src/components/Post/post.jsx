import React, { useState, useEffect } from "react";
import styles from './Post.module.css';
import Heart from "../Icons/Heart";

const Post = ({ heading, description, paragraph, toggleLike, post }) => {
    const [timePosted, setTimePosted] = useState('');

    useEffect(() => {
        const postTime = new Date(Number(post.timestamp) || Date.now()); // Ensure the timestamp is valid or use current time if not
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = postTime.toLocaleDateString('en-US', options);

        // Format the time (e.g., "5:30 PM")
        const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
        const formattedTime = postTime.toLocaleTimeString('en-US', timeOptions);

        // Set the time once when the post is first displayed
        setTimePosted(`posted on ${formattedDate} at ${formattedTime}`);
    }, [post.timestamp]); // Only re-run if the timestamp changes

    const handleToggleLike = () => {
        toggleLike(post); // Toggle like status in the parent component
    };

    return (
        <div className={styles.post}>
            <h3>{heading}</h3>
            <h6>{description}</h6>
            <p>{paragraph}</p>
            <div className={styles.details}>
                <div className={styles.profilePostedDetails}>
                    <div className={styles.pfpPosted}></div>
                    <p>Marlowe Reyes | <span className={styles.timePosted}>{timePosted}</span></p>
                </div>
                <div className={styles.icons}>
                    <Heart
                        className={`${styles.heart} ${post.liked ? styles.filled : ""}`} // Apply "filled" style based on `liked` state
                        onClick={handleToggleLike}
                    />
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Post;
