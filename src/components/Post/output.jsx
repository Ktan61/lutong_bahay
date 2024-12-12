import React from "react";
import Post from './post'; 
import styles from './Post.module.css';
import PrevPosts from '../PrevPosts/index';

export default function Output({ posts, toggleLike }) {
  return (
    <div className={styles.output}>
      {posts.map((post, index) => (
        <Post
          key={post.id}
          heading={post.heading}
          description={post.description}
          paragraph={post.paragraph}
          toggleLike={toggleLike}
          post={post} 
        />
      ))}
      <PrevPosts heading="Umami Boost" paragraph="Add a splash of fish sauce (patis) to your adobo for an extra depth of flavor. It’s the secret ingredient that enhances savory dishes!" postedTime="posted on December 12, 2024 at 3:00 PM" userName="Kenthryn Ten"/>
      <PrevPosts heading="Coconut Cream Magic" paragraph="Use coconut cream (kakang gata) instead of regular coconut milk for richer, creamier dishes like ginataang bilo-bilo or kare-kare." postedTime="posted on December 12, 2024 at 12:54 PM" userName="Tita Pia"/>
      <PrevPosts heading="Marinate with Love" paragraph="For grilled meats, marinate in soy sauce, calamansi juice, and garlic overnight. This not only tenderizes but infuses amazing flavor!" postedTime="posted on December 9, 2024 at 2:27 PM" userName="Maddison Tama"/>
    </div>
  );
}
