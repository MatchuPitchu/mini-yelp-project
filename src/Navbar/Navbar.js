import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
// import fontawesome for React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
    
    return (
        <>
        <div className="container navbar-bg">
            <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="./">
                    <b className="brand"> Mini <FontAwesomeIcon className="brandlogo"icon={["fa", "utensils"]}/>Yelp</b>
                    </NavLink>
                    <button className="navbar-toggler toggler-custom mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-auto">
                                <NavLink className="nav-link btn-register" active="active" to="./register" >Take part</NavLink>
                            </li>
                            <li className="nav-item mx-auto">
                                <NavLink className="nav-link" active="active" to="./login" >
                                    <FontAwesomeIcon className="icon-login" icon={['fa', 'sign-in-alt']} />
                                </NavLink>
                            </li>
                        </ul>                   
                    </div>
                </div>
            </nav>
        </div>
        <SearchBar/>
        </>
    )
}

export default Navbar;