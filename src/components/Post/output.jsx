import React from "react";
import Post from './post'; // Import Post component
import styles from './Post.module.css';

export default function Output({ posts, toggleLike }) {
  return (
    <div className={styles.output}>
      {/* Map over the posts and display them */}
      {posts.map((post, index) => (
        <Post
          key={index}
          heading={post.heading}
          description={post.description}
          paragraph={post.paragraph}
          toggleLike={toggleLike} // Pass toggleLike function
          post={post} // Pass the post itself
        />
      ))}
    </div>
  );
}
