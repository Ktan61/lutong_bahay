import { useState } from 'react';
import Header from '../components/Header/index.jsx';
import Editor from "../components/Post/index.jsx";
import Output from "../components/Post/output.jsx";
import styles from "../styles/Forum.module.css";
import Heart from '../components/Icons/Heart.jsx';

export default function Forum() {
    const [posts, setPosts] = useState([]); // State to hold posts
    const [showLikedOnly, setShowLikedOnly] = useState(false); // State for filtering liked posts

    // Function to toggle the like status of a post
    const toggleLike = (postToLike) => {
        setPosts(prevPosts =>
            prevPosts.map(post => 
                post === postToLike ? { ...post, liked: !post.liked } : post
            )
        );
    };

    // Filter posts based on whether they are liked
    const postsToDisplay = showLikedOnly 
        ? posts.filter(post => post.liked) 
        : posts;

    return (
        <div className={styles.forum}>
            <Header />
            <div className={styles.forumContainer}>
                <h1>Share a Recipe</h1>
                <div className={styles.forumContent}>
                    <div className={styles.sideContainer}>
                        <div className={styles.description}>
                            <img src="/Forum/forum.jpg" alt="Forum" />
                            View recipes from other Filipino food lovers outside of Lutong Bahay and share recipes that you create on your own.
                            <br/>
                            <br/>
                            Make sure to save the posts as they will disappear after a day.
                            <h4>{posts.length} Posts</h4> {/* Dynamically display the number of posts */}
                            <div className={styles.section}>
                                <Heart className={styles.heart}/>
                                <button onClick={() => setShowLikedOnly(prev => !prev)}>
                                    {showLikedOnly ? 'Show All' : 'Show Liked'}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.postContainer}>
                        <Editor setPosts={setPosts} /> {/* Pass only setPosts to Editor */}
                        <Output posts={postsToDisplay} toggleLike={toggleLike} /> {/* Pass filtered posts */}
                    </div>
                </div>
            </div>
        </div>
    );
}
