import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import "./NavLinks.css";

export default function NavLinks() {
  const auth = useContext(AuthContext);
  return (
    <div>
      <ul className="nav-links">
        <li>
          <NavLink exact to="/">
            ALL USERS
          </NavLink>
        </li>
        {auth.isLoggedIn && (
          <li>
            <NavLink to="/u1/places"> MY PLACES</NavLink>
          </li>
        )}

        {auth.isLoggedIn && (
          <li>
            <NavLink to="/places/new"> ADD PLACES</NavLink>
          </li>
        )}
        {!auth.isLoggedIn && (
          <li>
            <NavLink to="/auth"> AUTHENTICATE</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}
