import { useState, useEffect } from 'react';
import Header from '../components/Header/index.jsx';
import ShoppingListCard from '../components/ShoppingListCard/index.jsx';
import styles from '../styles/ShoppingList.module.css'; 
import SearchIcon from '@mui/icons-material/Search';
import recipe_list from '../data/list_recipes.json'; 

const ShoppingList = () => {
    const [allRecipes, setAllRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('allItems');
    const [cookTimeFilter, setCookTimeFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [fetchStatus, setFetchStatus] = useState('idle'); 

    const isLoading = fetchStatus === 'loading';
    const isError = fetchStatus === 'error';

    useEffect(() => {
        const fetchRecipes = async () => {
        const url = 'https://my-json-server.typicode.com/Ktan61/lb_api/recipes';

            try {
                if (url) {
                    const response = await fetch(url);
                    const data = await response.json();
                    console.log(data);
                    setAllRecipes(data);
                    setFilteredRecipes(data);
                    setFetchStatus('idle');
                } else {
                    setFetchStatus('loading');
                    setAllRecipes(recipe_list);
                    setFilteredRecipes(recipe_list);
                    setFetchStatus('idle');
                }
            } catch (e) {
                setFetchStatus('error');
                console.error(e.message);
            }
        };

        fetchRecipes();
    }, []);

    useEffect(() => {
        filterRecipes();
    }, [categoryFilter, cookTimeFilter, searchQuery, allRecipes]);

    const filterRecipes = () => {
        let filteredData = allRecipes;

        if (categoryFilter !== 'allItems') {
            filteredData = filteredData.filter(recipe => recipe.category === categoryFilter);
        }

        if (cookTimeFilter) {
            filteredData = filteredData.filter(recipe => {
                const hours = recipe.totalCookTime?.hours || 0; 
                const minutes = recipe.totalCookTime?.minutes || 0; 
                const totalMinutes = (hours * 60) + minutes;
        
                switch (cookTimeFilter) {
                    case 'under30':
                        return totalMinutes < 30;
                    case '30to60':
                        return totalMinutes >= 30 && totalMinutes <= 60;
                    case 'over1hour':
                        return totalMinutes > 60;
                    case 'over2hours':
                        return totalMinutes > 120;
                    default:
                        return true;
                }
            });
        }

        if (searchQuery) {
            filteredData = filteredData.filter(recipe => 
                recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredRecipes(filteredData);
    };

    const handleDelete = (id) => {
        const updatedRecipes = allRecipes.filter(recipe => recipe.id !== id);
        setAllRecipes(updatedRecipes);
    };

    return (
       <>
         <Header />
         <div className={styles.container}>
            <section className={styles.filterHeader}>
                <h1 className={styles.title}>Shopping List</h1>
                <div className={styles.filterHeaderRight}>
                    <select
                        name="categoryFilter"
                        id="categoryFilter"
                        className={styles.filterContainer}
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                        <option value="allItems">Sort By Category</option>
                        <option value="soups">Soups</option>
                        <option value="mains">Mains</option>
                        <option value="desserts">Desserts</option>
                    </select>

                    <select
                        name="cookTimeFilter"
                        id="cookTimeFilter"
                        className={styles.filterContainer}
                        value={cookTimeFilter}
                        onChange={(e) => setCookTimeFilter(e.target.value)}
                    >
                        <option value="">Sort By Total Cook Time</option>
                        <option value="under30">Under 30 min</option>
                        <option value="30to60">30 to 60 min</option>
                        <option value="over1hour">1 hour +</option>
                        <option value="over2hours">2 hours</option>
                    </select>

                    <div className={styles.search}>
                        <input
                            type="text"
                            placeholder="Search for recipe"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <SearchIcon className={styles.searchIcon} fontSize="medium" />
                    </div>
                </div>
            </section>

            {isLoading ? (
                <p>Loading recipes...</p>
            ) : isError ? (
                <p>Something went wrong! ☹️</p>
            ) : (
                <section className={styles.cardContainer}>
                    {filteredRecipes.map((recipe) => (
                        <ShoppingListCard 
                            key={recipe.id} 
                            myShoppingList={recipe} 
                            handleDelete={() => handleDelete(recipe.id)} 
                        />
                    ))}
                </section>
            )}
        </div>
       </>
    );
}

export default ShoppingList;
