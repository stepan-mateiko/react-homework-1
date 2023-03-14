import React from "react";
import propTypes from "prop-types";

import sunny from "../../assets/svg/sunny.svg";
import stormy from "../../assets/svg/stormy.svg";
import rainy from "../../assets/svg/rainy.svg";
import cloudy from "../../assets/svg/cloudy.svg";
import heat from "../../assets/svg/heat.svg";
import eclipse from "../../assets/svg/eclipse.svg";

const Icon = (props) => {
  const { icon } = props;
  switch (icon) {
    case "sunny":
      return <img src={sunny} alt="icon"></img>;
    case "stormy":
      return <img src={stormy} alt="icon"></img>;
    case "rainy":
      return <img src={rainy} alt="icon"></img>;
    case "cloudy":
      return <img src={cloudy} alt="icon"></img>;
    case "heat":
      return <img src={heat} alt="icon"></img>;
    case "eclipse":
      return <img src={eclipse} alt="icon"></img>;
  }
};

export default Icon;

Icon.propTypes = {
  icon: propTypes.string,
};
Icon.defaultProps = {
  icon: "sunny",
};
