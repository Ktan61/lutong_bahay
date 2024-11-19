import styles from './Header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import AccountBox from '@mui/icons-material/AccountBox';
import Navigation from '../Navigation/index.jsx';
import '@fontsource/berkshire-swash';
import '@fontsource/roboto';

export default function Header() {
    return (
        <div className={styles.header}>
            <Navigation />
            <div className={styles.search}>
                <input type="text" placeholder="Search for recipe" />
                <SearchIcon fontSize="medium" />
                <AccountBox className={styles.personIcon} fontSize="large" />
            </div>
        </div>
    );
}
