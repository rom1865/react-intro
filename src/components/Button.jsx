import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/require-default-props
function Button(props) {
  const { className, onClick, children } = props;
  const c = `btn ${className}`;
  return (
    <button type="button" className={c} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: "",
};

export default Button;
