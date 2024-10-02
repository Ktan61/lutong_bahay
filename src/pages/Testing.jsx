import styles from '../styles/Testing.module.css'
import Header from '../components/Header/index.jsx'

export default function Testing() {
    return(
        <div className={styles.test}>
            <Header />
            This is the testing page.
        </div>
    )
}

