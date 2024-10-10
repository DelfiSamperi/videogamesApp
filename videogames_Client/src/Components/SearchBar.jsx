import React from "react";

const SearchBar = () => {
    
    const handleSearch = (event) => {
        event.preventDefault();
        console.log('aca te haria la busqueda');
    };

    return (
        <div>
            <h3>Este es el searchbar</h3>
            <label>
                <input name='search' type="text" placeholder='Tu busqueda...' />
                <button onClick={handleSearch} >Search</button>
            </label>
        </div>
    )
};

export default SearchBar;