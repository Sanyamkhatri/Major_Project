import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
        <Link to="/register">Personal</Link>
        <Link to="/qualification">Qualification</Link>
        <Link to="/phd">PHD</Link>
        <Link to="/ExperienceMaster">Experience Details</Link>
      </nav>
    </div>
  );
};

export default Navigation;
