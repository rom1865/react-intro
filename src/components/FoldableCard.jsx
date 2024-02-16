import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card.jsx";
import useShowable from "../hooks/useShowable";

function FoldableCard({ opened, title, children, onToggleOpened }) {
  const { isShown, toggleShown, extendedClassName, setIsShown } = useShowable(opened);

  useEffect(() => {
    setIsShown(opened);
  }, [opened]);

  const icon = isShown ? (
    <FontAwesomeIcon icon={faCircleMinus} />
  ) : (
    <FontAwesomeIcon icon={faCirclePlus} />
  );

  return (
    <Card
      title={
        <div>
          {title}
          <div className="foldable-icon">{icon}</div>
        </div>
      }
      className={extendedClassName}
      onClick={() => {toggleShown(); onToggleOpened();}}
    >
      {isShown ? children : null}
    </Card>
  );
}

FoldableCard.propTypes = {
  title: PropTypes.node,
  opened: PropTypes.bool,
  children: PropTypes.node,
  onToggleOpened: PropTypes.func,
};

FoldableCard.defaultProps = {
  title: "title",
  opened: false,
};

export default FoldableCard;
