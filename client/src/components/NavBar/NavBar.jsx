import React from "react";
import Logo from "../../assets/logo/t-logo.jpg";
import "./NavBar.scss";
import "../../Style/Partials/Global.scss";
import { Link } from "react-router-dom";
import Profile from "../../assets/images/profile.jpg"

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <div className="navBar__logo-container">
          <img className="navBar__logo" src={Logo} alt="inStock logo" />
        </div>
      </Link>
      <div className="navBar__linksAndProfiles">
      <img className="navBar__profile" src={Profile} alt="inStock logo" />
        <Link to="/profile" className="navBar__link">
          Warehouses
        </Link>
        <Link to="/create" className="navBar__link">
          Inventory
        </Link>
      </div>
    </div>
  );
}

export default NavBar;

