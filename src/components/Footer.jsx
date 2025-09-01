import React from 'react';
import { Link } from 'react-router-dom'
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li><Link to="/Parcours">Parcours</Link></li>
                    <li><Link to="/Projets">Projets</Link></li>
                </ul>
            </nav>
            <p><Link to="/">UN JOLI LOGO</Link></p>
            <nav>
                <ul>
                    <li><Link to="/Curriculum">Curriculum</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;