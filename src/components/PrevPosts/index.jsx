import React, { useState, useEffect } from "react";
import styles from "./PrevPosts.module.css";
import HeartFill from "../Icons/HeartFill";

export default function PrevPosts({ heading, paragraph, post, postedTime, userName }) {
  const handleToggleLike = () => {
    // Your handleToggleLike logic here
  };

  return (
    <div className={styles.prevPost}>
      <h3>{heading}</h3>
      <p>{paragraph}</p>
      <div className={styles.info}>
      <div className={styles.details}>
        <div className={styles.profilePostedDetails}>
          <div className={styles.pfpPosted}></div>
          <p>
            {userName} | <span className={styles.timePosted}>{postedTime}</span>
          </p>
        </div>
      </div>
      <div className={styles.icons}>
        <HeartFill
          className={`${styles.heart} ${post?.liked ? styles.filled : ""}`}
          onClick={handleToggleLike}
        />
      </div>
      </div>
      <hr />
    </div>
  );
}
