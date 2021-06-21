import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./NavItem.module.scss"

export const NavItem = ({className, label, to}) => (
    <NavLink className={`nav-item ${styles.navItem} ${className}`} activeClassName={styles.active} exact to={to}>
        {label}
    </NavLink>
);
