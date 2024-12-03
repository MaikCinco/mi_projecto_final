import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/auth">Iniciar Sesión</Link>
        <Link to="/post">Nuevo Post</Link>
      </nav>
    </header>
  );
};

export default Header;