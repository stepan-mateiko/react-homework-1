import React, { Fragment } from "react";

import City from "../City";
import styles from "./index.module.scss";

const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <City name="Lisbon " temp="21" bgColor="#3399CC" icon="sunny" area="a" />
      <City name="Paris " temp="11" bgColor="#33CCCC" icon="rainy" area="b" />
      <City
        name="Belgrade "
        temp="15"
        bgColor="#996699"
        icon="cloudy"
        area="c"
      />
      <City name="Venice " temp="21" bgColor="#C24747" icon="cloudy" area="d" />
      <City
        name="Tel-Avive "
        temp="32"
        bgColor="#E2674A"
        icon="heat"
        area="e"
      />
      <City name="Cairo " temp="21" bgColor="#FFCC66" icon="sunny" area="f" />
      <City
        name="New York "
        temp="17"
        bgColor="#99CC99"
        icon="stormy"
        area="g"
      />
      <City
        name="New Dehli "
        temp="17"
        bgColor="#669999"
        icon="rainy"
        area="h"
      />
      <City
        name="San Francisco "
        temp="15"
        bgColor="#CC6699"
        icon="cloudy"
        area="i"
      />
      <City name="Tokyo " temp="8" bgColor="#339966" icon="eclipse" area="j" />
      <City name="Sydney " temp="25" bgColor="#666699" icon="cloudy" area="k" />
    </div>
  );
};

export default Wrapper;
