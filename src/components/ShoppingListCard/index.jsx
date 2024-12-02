import styles from './ShoppingListCard.module.css';
import HelpSharpIcon from '@mui/icons-material/HelpSharp';
import CancelIcon from '@mui/icons-material/Cancel';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { useState } from 'react';

export default function ShoppingListCard(props) {
    const { myShoppingList, handleDelete } = props;

    if (!myShoppingList) {
        return null; 
    }
    const ingredients = myShoppingList.ingredients || []; 
    const totalCookTime = myShoppingList.totalCookTime || {};

    const [checkedItems, setCheckedItems] = useState(
        ingredients.map(() => false) 
    );

    const [isHovered, setIsHovered] = useState(false);

    const handleCheck = (index) => (event) => {
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems[index] = event.target.checked;
        setCheckedItems(updatedCheckedItems);
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.imageContainer}
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} 
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
                            <CancelIcon fontSize='large' onClick={(e) => { e.stopPropagation(); handleDelete(); }} className={styles.deleteButton}/>
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.cardHeading}>
                <h className={styles.headingName}>{myShoppingList.name}</h>
                <h5 className={styles.headingQty}>Qty</h5>
            </div>
            <h6 className={styles.totalCookTime}>
                Total Cook Time: 
                {myShoppingList.totalCookTime?.hours > 0 && ` ${myShoppingList.totalCookTime.hours} hr`} 
                {myShoppingList.totalCookTime?.hours > 0 && myShoppingList.totalCookTime.minutes > 0 ? ' ' : ''} 
                {myShoppingList.totalCookTime?.minutes > 0 && ` ${myShoppingList.totalCookTime.minutes} min`}
            </h6>
            <ul className={styles.ingredientsContainer}>
                {myShoppingList.ingredients.map((ingredient, index) => (
                <li key={index} className={styles.ingredientItem}>
                    <div className={styles.ingredientsLeft}>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checkedItems[index]} 
                                        onChange={handleCheck(index)}
                                        size="large"
                                        sx={{
                                            color: 'var(--yellow)',
                                            '&.Mui-checked': {
                                                color: 'var(--blue)', 
                                            }
                                        }}
                                    />
                                }
                                label={
                                    <span 
                                        style={{ 
                                            fontSize: '.8rem', 
                                            lineHeight: '1.5',
                                            textDecoration: checkedItems[index] ? 'line-through' : 'none',
                                            color: checkedItems[index] ? 'var(--gray)' : 'inherit',
                                        }}
                                    >
                                        {ingredient[0]}
                                        {ingredient[2] === "specialty" && (
                                            <Tooltip 
                                                title={
                                                    <Typography sx={{ p: 1, fontSize: "16px"}}>
                                                        Find this specialty ingredient at:<br />
                                                        <a href="https://www.instagram.com/explore/locations/432744080540085/tama-supermarket-limit/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--yellow)', textDecoration: 'none' }}>Tama Supermarket →</a> <br />
                                                        <a href="https://g.co/kgs/r5sXfYk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--yellow)', textDecoration: 'none' }}>Kay Market →</a>
                                                    </Typography>
                                                }
                                            >
                                                <HelpSharpIcon 
                                                    className={styles.specialtyIcon} 
                                                    fontSize="small" 
                                                    style={{ marginLeft: '0.3rem', verticalAlign: 'middle' }}
                                                />
                                            </Tooltip>
                                        )}
                                    </span>
                                }
                            />
                        </FormGroup>
                    </div>
                    <div className={styles.ingredientAmount}>{ingredient[1]}</div>
                </li>
                ))}
            </ul>
        </div>
    );
}
