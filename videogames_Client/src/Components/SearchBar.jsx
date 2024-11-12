import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
     
    const [ name, setName ] = useState('');

    const handleChange = (event) => {
        event.preventDefault();
        const { value } = event.target;
        //setName(value);
        console.log('name: ', name);
        setName({
            ...name, 
            value,
            //[event.target.name]: event.target.value,
        })
    };

    return (
        <div className="search-container">
            <h3>Este es el searchbar</h3>
            <label>
                <input name='search' type="search" id='search' onChange={handleChange} placeholder='Tu busqueda...' />
                <button onClick={()=> {onSearch(name), setName('')}} >Search</button>
            </label>
        </div>
    )
};

export default SearchBar;