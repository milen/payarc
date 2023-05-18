import React from "react";
import Icons from "../../assets/svg/icons.svg";
import PropTypes from "prop-types";
import myPayarc from "../../assets/svg/icon-my-payarc.svg";

const Icon = ({ name, color, width, height }) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    preserveAspectRatio="xMidYMid meet"
    className={`icon icon-${name}`}
    fill={color}
    width={width}
    height={height}
  >
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Icon;
