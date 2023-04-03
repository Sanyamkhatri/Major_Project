import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import '../Styles/header.css'

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="aside">
      <Link to="/login">Log In</Link>
      <Link to="/register">Add User</Link>
      </div>
      
    </nav>
  );
};

export default Header;
