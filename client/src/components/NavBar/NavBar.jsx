import React from "react";
import Logo from "../../assets/logo/tribe.png";
import Tlogo from "../../assets/logo/T-logo.png"
import "./NavBar.scss";
import "../../Style/Partials/Global.scss";
import { Link } from "react-router-dom";
import Profile from "../../assets/images/profile.jpg"

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <div className="navBar__logo-container1">
          <img className="navBar__logo" src={Tlogo} alt="inStock logo" />
        </div>
        <div className="navBar__logo-container2">
          <img className="navBar__logo" src={Logo} alt="inStock logo" />
        </div>
      </Link>
      <div className="navBar__linksAndProfiles">
        <img className="navBar__profile" src={Profile} alt="inStock logo" />
        <div className="navBar__links">
          <Link to="/profile" className="navBar__link">
            My Page
        </Link>
          <Link to="/create" className="navBar__link">
            Create event
        </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

