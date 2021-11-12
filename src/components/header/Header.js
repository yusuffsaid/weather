import React from 'react'
import { Link } from 'react-router-dom';
import "./header.css";
import SearcInput from './SearcInput';
const Header = () => {
    
    return (
        <header className="header">
            <div className="search-area">
            <SearcInput/>
            </div>
            <div className="menu-area">
                <div className="home">
                <Link to="/"><i className="fas fa-home"></i></Link>
                </div>
                <div className="map">
                <Link to="/map"><i className="fas fa-map-marker-alt"></i></Link>
                </div>
                <div className="fav">
                <Link to="/favori"><i class="fas fa-star"></i></Link>
                </div>

            </div>
            
            
        </header>
    )
}

export default Header
