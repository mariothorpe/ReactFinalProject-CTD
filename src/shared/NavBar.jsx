import React from 'react';
import { NavLink } from 'react-router';
import styles from './NavBar.module.css';



function NavBar() {
    return (
          <nav className={styles.nav}>
            <div className={styles.links}>
            <NavLink
              to="/"
              className=
              {({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link
    }
              >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className=
              {({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
              >
                About
            </NavLink>
            <NavLink
              to="/login"
              className=
              {({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
              >
                Login
                </NavLink>
                <NavLink
              to="/signup"
              className=
              {({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
              >
                Sign Up
                </NavLink>
            </div>
        </nav>
);
}

export default NavBar;
