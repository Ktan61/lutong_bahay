import Header from '../components/Header/index.jsx'
import Editor from "../components/Post/index.jsx";
import Output from "../components/Post/output.jsx";
import styles from "../styles/Forum.module.css";
import Chips from "../components/Chips/index.jsx";

export default function Forum() {
    return(
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
                            <h4>601 People</h4>
                            <h4>5 Posts</h4>
                        </div>
                        <div className={styles.tags}>
                            <Chips text="Dessert"/>
                            <Chips text="Main"/>
                            <Chips text="Yum"/>
                            <Chips text="Must Try"/>
                            <Chips text="Popular"/>
                        </div>
                        <div className={styles.sections}>

                        </div>
                    </div>
                    <div className={styles.postContainer}>
                        <Editor />
                        <Output />
                    </div>
                </div>
             </div>
        </div>
    )
}

