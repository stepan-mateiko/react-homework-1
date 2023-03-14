import React, { Fragment } from "react";
import styles from "./index.module.scss";

import Wrapper from "../../Wrapper";
const MainPage = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>CSS Weather Forecast </h1>
      <Wrapper />
    </div>
  );
};

export default MainPage;
