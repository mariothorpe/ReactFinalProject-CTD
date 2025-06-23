import React from 'react';
import { NavLink } from 'react-router';
import styles from './NavBar.module.css';



function NavBar({ header }) {
    return (
        <div>
        <NavBar className={styles.NavBar}/>
        <h1 className={styles.header}>{header}</h1>
          <nav className={styles.nav}>
            <NavLink
              to="/"
              className=
              {({ isActive }) => isActive ? styles.active : styles.inactive}
              >
              Home
            </NavLink>
            <span className="separator">|</span>
            <NavLink
              to="/about"
              className=
              {({ isActive }) => isActive ? styles.active : styles.inactive}
              >
                About
            </NavLink>
            <span className="separator">|</span>
            <NavLink
              to="/newUser"
              className=
              {({ isActive }) => isActive ? styles.active : styles.inactive}
              >
                Create Account
            </NavLink>
          </nav>
        </div>
);
}

export default NavBar;
