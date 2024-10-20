import styles from './ShoppingListCard.module.css';
import HelpSharpIcon from '@mui/icons-material/HelpSharp';
import CancelIcon from '@mui/icons-material/Cancel';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { useState } from 'react';

export default function ShoppingListCard(props) {

    const { myShoppingList } = props;

    const [checkedItems, setCheckedItems] = useState(
        myShoppingList.ingredients.map(() => false) 
    );

    const [isHovered, setIsHovered] = useState(false);

    const handleCheck = (index) => (event) => {
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems[index] = event.target.checked;
        setCheckedItems(updatedCheckedItems);
    };


    return(
        <>
            <div className={styles.container}>
                <div
                    className={styles.imageContainer}
                    onMouseEnter={() => setIsHovered(true)} // Show overlay on hover
                    onMouseLeave={() => setIsHovered(false)} // Hide overlay when not hovering
                >
                    <img 
                        alt={myShoppingList.altText} 
                        src={myShoppingList.image} 
                        width={468} 
                        height={328} 
                        className={styles.image}
                    />
                    {isHovered && (
                        <div className={styles.imageOverlay}>
                            <div className={styles.imageOverlayContent}>
                                <CancelIcon fontSize='large'/>
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.cardHeading}>
                    <h3 className={styles.headingName}>{myShoppingList.name}</h3>
                    <h5 className={styles.headingQty}>Qty</h5>
                </div>
                <ul className={styles.ingredientsContainer}>
                    {myShoppingList.ingredients.map((ingredient, index) => (
                        <li key={index} className={`${styles.ingredientItem} ${checkedItems[index] ? styles.strikethrough : ""}`} >
                            {/*<div className={styles.ingredientsLeft}>
                                <input type='checkbox' className={styles.checkbox} />
                                <span className={styles.ingredientName}>{ingredient[0]}</span> 
                                {ingredient[2] === "specialty" ? <SearchIcon className={styles.specialtyIcon} fontSize="small"/> : null}
                            </div>*/}
                            <div className={styles.ingredientsLeft}>
                                <FormGroup>
                                <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox
                                            checked={checkedItems[index]} 
                                            onChange={handleCheck(index)}
                                            size='large'
                                            sx={{
                                                color: 'var(--yellow)',
                                                '&.Mui-checked': {
                                                    color: 'var(--blue)', // Custom color for the checked state
                                                }
                                            }}
                                        />
                                    }
                                    label={
                                        <span className={styles.ingredientsLeft}
                                        >
                                            {ingredient[0]} 
                                        </span>
                                    }
                                />
                                </FormGroup>
                                {ingredient[2] === "specialty" ? 
                                    <Tooltip title={
                                        <Typography sx={{ p: 1, fontSize: "16px"}}>
                                            Find this specialty ingredient at:<br />
                                            <a href="https://www.instagram.com/explore/locations/432744080540085/tama-supermarket-limit/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--yellow)', textDecoration: 'none' }}>Tama Supermarket →</a> <br />
                                            <a href="https://g.co/kgs/r5sXfYk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--yellow)', textDecoration: 'none' }}>Kay Market →</a>
                                        </Typography>}>
                                        <HelpSharpIcon className={styles.specialtyIcon} fontSize="small"/>
                                    </Tooltip> : null }
                            </div>
                            <div className={styles.ingredientAmount}>{ingredient[1]}</div> 
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};