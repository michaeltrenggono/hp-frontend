import React from "react";
import styles from "./NavContainer.module.scss";

export const Nav = ({className, children}) => (
    <div className={`${styles.navContainer} ${className}`}>
        <div className="nav">
            {children}
        </div>
    </div>
);
