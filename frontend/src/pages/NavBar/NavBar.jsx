import React, { useState } from 'react';
import burgerMenu from '../../assets/burgerMenu.png';
import "./NavBar.css";

const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`allCategory ${isMenuOpen ? 'menuOpen' : ''}`}>
      <ul className={`category1 ${isMenuOpen ? 'menuOpen' : ''}`}>
        <li className="category">Home</li>
        <li className="category">About me</li>
        <li className="category">My Projects</li>
      </ul>
      <img
        src={burgerMenu}
        alt="menu_button"
        className="burgerMenuImage"
        onClick={toggleMenu}
      />
    </header>
  );
};

export default BurgerMenu;
