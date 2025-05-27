import React from 'react';
import { Link } from 'react-router-dom'
import '../css/Header.css';

const Header = () => {
    return (
        <header>
            <p><Link to="/">UN JOLI LOGO</Link></p>
            <nav>
                <ul>
                    <li><Link to="/Parcours">Parcours</Link></li>
                    <li><Link to="/Projets">Projets</Link></li>
                    <li><Link to="/Curriculum">Curriculum</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;