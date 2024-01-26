import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/require-default-props
function Button(props) {
  const { className, children, onClick } = props;
  const c = `btn ${className}`;
  return (
    <button type="button" className={c}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: "",
};

export default Button;
