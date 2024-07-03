// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Sarmat Lutfullin</h1>
            <nav>
                <Link to="/">About Me</Link>
                <Link to="/photos">Photos</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact Me</Link>
                <Link to="/ComicPage">Find Joke</Link>
            </nav>
        </header>
    );
};

export default Header;
