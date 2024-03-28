import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <img 
        src="https://w7.pngwing.com/pngs/173/464/png-transparent-pokemon-ball-pokeball-area-wiki-technology-thumbnail.png" 
        alt="Logo Pokémon" 
        className="navbar-logo"
      />
      <div className="navbar-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/pokemones" className="nav-link">Pokemones</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
