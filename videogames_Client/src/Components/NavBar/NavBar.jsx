import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <div className='img-nav'>
                <h4>Este es el navbar</h4>
            </div>
            
            <div className='links-cont'>
                <Link to='/home'>Home</Link>
                <Link to='/form'>Create</Link>
                <Link to='/home'>Profile??</Link>
            </div>
        </nav>
    )
};

export default NavBar;
