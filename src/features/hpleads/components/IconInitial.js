import React from "react";
import styles from "./IconInitial.module.scss";

export const IconInitial = ({className, initial}) => (
    <div className={`${styles.iconInitial} ${className}`}>
        {initial}
    </div>
);
