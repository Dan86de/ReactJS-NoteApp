import React from "react";
import styles from "./FormRadio.module.scss";

const Radio = ({ id, checked, changeFn, children }) => {
  return (
    <label className={styles.radio}>
      <input type="radio" id={id} checked={checked} onChange={changeFn} />
      <div className={styles.radioButton} />
      {children}
    </label>
  );
};

export default Radio;
