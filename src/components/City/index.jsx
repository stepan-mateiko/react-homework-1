import React, { Fragment } from "react";
import propTypes from "prop-types";

import Icon from "../Icon";
const City = (props) => {
  const { name, temp, icon, bgColor, area } = props;
  const cityStyles = {
    backgroundColor: bgColor,
    textAlign: "center",
    paddingTop: 27,
    paddingBottom: 27,
    color: "white",
    border: "solid white 3px",
    gridArea: area,
  };
  return (
    <div style={cityStyles}>
      <p>{name}</p>
      <p>{`${temp} C `}</p>
      <Icon icon={icon} />
    </div>
  );
};

export default City;
