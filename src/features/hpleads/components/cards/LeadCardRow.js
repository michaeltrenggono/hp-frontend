import React from "react";
import styles from "./LeadCardRow.module.scss";

export const LeadCardRow = ({className, children}) => (
    <div className={`${styles.leadCardRow} ${className}`}>
        {children}
    </div>
);
