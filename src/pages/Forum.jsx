import { useState } from 'react';
import Header from '../components/Header/index.jsx';
import Editor from "../components/Post/index.jsx";
import Output from "../components/Post/output.jsx";
import styles from "../styles/Forum.module.css";
import HeartFill from '../components/Icons/HeartFill.jsx';

export default function Forum() {
    const [posts, setPosts] = useState([]);
    const [showLikedOnly, setShowLikedOnly] = useState(false); 

    const toggleLike = (postToLike) => {
        setPosts(prevPosts =>
            prevPosts.map(post => 
                post === postToLike ? { ...post, liked: !post.liked } : post
            )
        );
    };

    const postsToDisplay = showLikedOnly 
        ? posts.filter(post => post.liked) 
        : posts;

    return (
        <div className={styles.forum}>
            <Header />
            <div className={styles.forumContainer}>
                <h1>Share a Tip</h1>
                <div className={styles.forumContent}>
                    <div className={styles.sideContainer}>
                        <div className={styles.description}>
                            <img src="/Forum/forum.png" alt="Forum" />
                            View recipes from other Filipino food lovers outside of Lutong Bahay and share tips on your favourite recipes to help other filipino food lovers.
                            <br/>
                            <br/>
                            Make sure to like the posts as they will disappear after a day.
                            <h4>3027 People Online <br/> {posts.length} Posts</h4> 
                            <div>
                                <button onClick={() => setShowLikedOnly(prev => !prev)} className={styles.section}>
                                <HeartFill className={styles.heart}/>
                                    {showLikedOnly ? 'Show All' : 'Show Liked'}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.postContainer}>
                        <Editor setPosts={setPosts} />
                        <Output posts={postsToDisplay} toggleLike={toggleLike} /> 
                    </div>
                </div>
            </div>
        </div>
    );
}
