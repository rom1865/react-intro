import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/require-default-props
function Button(props) {
  const { className, onClick, children } = props;
  const c = `btn ${className}`;

  const handleClick = (event) => {
    event.stopPropagation();

    if (onClick) {
      onClick();
    }
  };

  return (
    <button type="button" className={c} onClick={handleClick}>
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
