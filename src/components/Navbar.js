import React from 'react';
import { NavLink } from 'react-router-dom';
// import fontawesome for React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    
    return (
        <>
        <div className="container navbar-bg">
            <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="./">
                        <div className="d-flex justify-content-between">
                            <FontAwesomeIcon icon={['fa', 'child']} />
                            <FontAwesomeIcon className="sport-icon-right" icon={['fa', 'running']} />
                            <FontAwesomeIcon className="sport-icon-right" icon={['fa', 'biking']} />
                            <FontAwesomeIcon icon={['fa', 'table-tennis']} />
                            <FontAwesomeIcon className="sport-icon-left" icon={['fa', 'swimmer']} />
                            <FontAwesomeIcon className="sport-icon-rotate" icon={['fa', 'futbol']} />
                            <FontAwesomeIcon className="sport-icon-desc" icon={['fa', 'skiing']} />
                        </div>
                        <div><b>The Blog</b> about Sports in Life</div>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                    
                        <form className="d-flex ml-auto">
                            <input className="form-control searchbar" type="search" placeholder="Search your topic" aria-label="Search" />
                            <span className="input-group-text search-icon-container"><FontAwesomeIcon icon={['fa', 'search']} type="submit"/></span>
                        </form>
                   
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navbar;