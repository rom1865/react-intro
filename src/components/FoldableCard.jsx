import React, { useState } from "react";
import PropTypes from "prop-types";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card.jsx";

// eslint-disable-next-line react/require-default-props
function FoldableCard(props) {
  // eslint-disable-next-line react/prop-types
  const { opened, title, children } = props;

  const [isShown, setIsShown] = useState(opened);

  const c = `foldable ${isShown ? "shown" : ""}`;
  const icon = isShown ? (
    <FontAwesomeIcon icon={faCircleMinus} />
  ) : (
    <FontAwesomeIcon icon={faCirclePlus} />
  );

  const clickHandler = () => {
    setIsShown(!isShown);
    console.log("click");
  };

  return (
    <Card
      title={
        <div>
          {title}
          <div className="foldable-icon">{icon}</div>
        </div>
      }
      className={c}
      onClick={clickHandler}
    >
      {isShown ? children : null}
    </Card>
  );
}

FoldableCard.propTypes = {
  title: PropTypes.node,
  opened: PropTypes.bool,
};

FoldableCard.defaultProps = {
  title: "title",
  opened: false,
};

export default FoldableCard;
