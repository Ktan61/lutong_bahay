import React from "react";
import styles from './Post.module.css';
import Heart from "../Icons/Heart";
import Save from "../Icons/Save";

const Post = ({ heading, description, paragraph }) => {
    return (
        <div className={styles.post}>
            <h3>{heading}</h3>
            <h6>{description}</h6>
            <p>{paragraph}</p>
            <div className={styles.details}>
                <div className={styles.profilePostedDetails}>
                    <div className={styles.pfpPosted}></div>
                    <p>Marlowe Reyes | <span className={styles.timePosted}>posted 5 seconds ago</span></p>
               </div>
               <div className={styles.icons}>
                    <Heart className={styles.heart}/>
                    <Save className={styles.save}/>
               </div>
            </div>
            <hr/>
        </div>
    );
};

export default Post;
