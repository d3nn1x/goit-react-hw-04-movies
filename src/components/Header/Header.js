import React from "react";
import { NavLink } from "react-router-dom";
import router from "../../router";

const Header = () => {
  return (
    <header className="header">
      <div className="nav">
        <ul className="nav_list">
          <li className="nav_item">
            <NavLink exact to={router.home} className="nav_link" activeClassName="nav_link--active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={router.movies} className="nav_link" activeClassName="nav_link--active">
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
