import styles from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountBox from '@mui/icons-material/AccountBox';
import Navigation from '../Navigation/index.jsx';
import '@fontsource/berkshire-swash';
import '@fontsource/roboto';

export default function Header() {
    return (
        <>
        <div className={styles.header}>
            <img src={'/LH_templogo.svg'} alt={'lutong bahay temporary logo'} width={115} height={115} className={styles.logo} />
            <Navigation />
            <div className={styles.search}>
                <input type="text" />
                <SearchIcon fontSize="medium"/>
                <AccountBox className={styles.personIcon} fontSize='large'/>
            </div>
        </div>
        </>
    )
}