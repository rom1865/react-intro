import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button.jsx";

function Counter({ before, after, className, onChange, initial }) {
  const [cpt, setCpt] = useState(initial);

  const c = `btn ${className}`;
  const clickHandler = () => {
    setCpt(cpt + 1);
    console.log(`Valeur du compteur : ${cpt}`);
  };

  useEffect(() => {
    if (onChange !== null) {
      onChange(cpt);
    }
  }, [cpt]);

  return (
    <Button className={c} onClick={clickHandler}>
      {before} {cpt} {after}
    </Button>
  );
}

Counter.propTypes = {
  before: PropTypes.node,
  after: PropTypes.node,
  className: PropTypes.string,
  initial: PropTypes.number,
};

Counter.defaultProps = {
  before: null,
  after: null,
  className: "",
  initial: 0,
};

export default Counter;
