import React from "react";
import PropTypes from "prop-types";

const Link = (props) => {
  return (
    <button
      onClick={() => props.setVisibilityFilter(props.filter)}
      disabled={props.active}
      style={{
        marginLeft: "4px",
      }}
    >
      {props.children}
    </button>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Link;
