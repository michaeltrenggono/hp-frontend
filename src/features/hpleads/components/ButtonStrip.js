import React from "react";
import styles from "./ButtonStrip.module.scss";

export const ButtonStrip = ({className, label, onClick}) => (
    <div className={`buttonStrip ${styles.buttonStrip} ${className}`}>
        <button type="button" className="btn rounded-0" onClick={onClick}>{label}</button>
        <div className={styles.bottomStrip}/>
    </div>
);
