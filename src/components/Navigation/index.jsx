import styles from './Navigation.module.css';
import { useLocation } from 'react-router-dom';
import '@fontsource/berkshire-swash';
import '@fontsource/roboto';
import '@fontsource/koulen';
import { useState } from 'react';
import Hamburger from "/src/assets/menu-outline.svg"
import { NavLink } from 'react-router-dom';


export default function Navigation() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <>
            <div className={styles.mobileHeader}>
                <div className={styles.hamborgerContainer}>
                <img src={Hamburger} onClick={toggleMenu} className={styles.hamborger}/>
                    {isMenuOpen ? "Close" : "Menu"}
                </div>
                <img 
                src={'/LH_templogo.svg'} 
                alt={'lutong bahay temporary logo'} 
                width={64} 
                height={64} 
                className={styles.mobileLogo} 
            />
            </div>
            <img 
                src={'/LH_templogo.svg'} 
                alt={'lutong bahay temporary logo'} 
                width={115} 
                height={115} 
                className={styles.logo} 
            />
            <nav className={`${styles.navigation} ${isMenuOpen ? styles.open : ""}`}>
                <ul className={styles.linksList}>
                    <NavLink to={`/`} className={location.pathname === "/" ? styles.active : ""}>Home</NavLink>
                    <NavLink to={`/recipes`} className={location.pathname === "/recipes" ? styles.active : ""}>Recipes</NavLink>
                    <NavLink to={`/forum`} className={location.pathname === "/forum" ? styles.active : ""}>Forum</NavLink>
                    <NavLink to={`/shoppinglist`} className={location.pathname === "/shoppinglist" ? styles.active : ""}>Shopping List</NavLink>
                </ul>
            </nav>
        </>
    );
}
