import React, { useState, useEffect } from "react";
import styles from './Post.module.css';
import Heart from "../Icons/Heart";

const Post = ({ heading, description, paragraph, toggleLike, post }) => {
    const [timePosted, setTimePosted] = useState('');

    useEffect(() => {
        const postTime = new Date(Number(post.timestamp) || Date.now()); 
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = postTime.toLocaleDateString('en-US', options);

        const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
        const formattedTime = postTime.toLocaleTimeString('en-US', timeOptions);

        setTimePosted(`posted on ${formattedDate} at ${formattedTime}`);
    }, [post.timestamp]); 

    const handleToggleLike = () => {
        toggleLike(post); 
    };

    return (
        <div className={styles.post}>
            <h3>{heading}</h3>
            <p>{paragraph}</p>
            <div className={styles.details}>
                <div className={styles.profilePostedDetails}>
                    <div className={styles.pfpPosted}></div>
                    <p>Marlowe Reyes | <span className={styles.timePosted}>{timePosted}</span></p>
                </div>
                <div className={styles.icons}>
                    <Heart
                        className={`${styles.heart} ${post.liked ? styles.filled : ""}`}
                        onClick={handleToggleLike}
                    />
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Post;
