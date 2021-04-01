import React from "react";

import { NavLink } from "react-router-dom";

import { withRouter } from "react-router-dom";

import s from "./Navigation.module.css";

const Navigation = ({ match }) => {
  return (
    <nav>
      <ul className={s.navList}>
        <li>
          <NavLink to={`${match.url}`}>Home</NavLink>
        </li>

        <li>
          <NavLink to={`${match.url}cocktails`}>Cocktails</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}contacts`}>Contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
