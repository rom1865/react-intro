import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/require-default-props
function Button(props) {
  const { className, children } = props;
  return (
    <button type="button" className={className}>
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
