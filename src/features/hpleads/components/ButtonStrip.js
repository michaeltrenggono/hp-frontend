import React from "react";
import styles from "./ButtonStrip.module.scss";

export const ButtonStrip = ({className, label, onClick}) => (
    <div className={`buttonStrip ${styles.buttonStrip} ${className}`} onClick={onClick}>
        <button type="button" className="btn rounded-0">{label}</button>
        <div className={styles.bottomStrip}/>
    </div>
);
