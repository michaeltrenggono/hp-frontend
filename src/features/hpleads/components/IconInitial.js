import React from "react";
import styles from "./IconInitial.module.scss";

export const IconInitial = ({className, firstName}) => (
    <div className={`${styles.iconInitial} ${className}`}>
        {firstName.charAt(0).toUpperCase()}
    </div>
);
