import React from 'react'; 
import RestaurantPage from '../RestaurantPage/RestaurantPage';
import SearchNav from '../SearchNav/SearchNav';
import styles from './Search.module.css';


const Search = () => {
    return (
        <div>
            <SearchNav/>
            <RestaurantPage/>
        
        </div>
    )
}

export default Search
