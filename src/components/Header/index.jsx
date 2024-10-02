import styles from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import Navigation from '../Navigation/index.jsx';

export default function Header() {
    return (
        <>
        <div className={styles.header}>
            <div className={styles.spacer}></div>
            <h1>Lutong Bahay</h1>
            <div className={styles.search}>
                <input type="text" />
                <SearchIcon fontSize="small"/>
            </div>
            <PersonIcon />
        </div>
        <Navigation />
        </>
    )
}