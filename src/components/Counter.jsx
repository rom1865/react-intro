import React, { useState } from "react";
import PropTypes from "prop-types";

function Counter({ before, after, className }) {
  const [cpt, setCpt] = useState(0);

  const c = `btn ${className}`;
  const clickHandler = () => {
    setCpt(cpt + 1);
    console.log(`Valeur du compteur : ${cpt}`);
  };

  return (
    <button type="button" className={c} onClick={clickHandler}>
      {before} {cpt} {after}
    </button>
  );
}

Counter.propTypes = {
  before: PropTypes.node,
  after: PropTypes.node,
  className: PropTypes.string,
};

Counter.defaultProps = {
  before: null,
  after: null,
  className: "",
};

export default Counter;
