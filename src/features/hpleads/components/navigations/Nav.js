import React from "react";
import styles from "./NavContainer.module.scss";

export const Nav = ({className, children}) => (
    <div className={`${styles.navContainer} ${className}`}>
        <ul className="nav">
            {children}
        </ul>
    </div>
);
