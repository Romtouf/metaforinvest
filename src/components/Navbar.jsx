import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onLoginClick, onSignupClick }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Meta4invest</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">À propos</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/portfolio">Portefeuille</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <button onClick={onLoginClick}>Connexion</button>
        </li>
        <li>
          <button onClick={onSignupClick}>Inscription</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
