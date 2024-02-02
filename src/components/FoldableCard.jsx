import React from "react";
import PropTypes from "prop-types";
import Card from "./Card.jsx";
import {faCirclePlus, faCircleMinus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/require-default-props
function FoldableCard(props) {
    // eslint-disable-next-line react/prop-types
    const { opened, title, children } = props;

    const c = `foldable ${opened ? "shown" : ""}`;
    const icon = opened ?
        <FontAwesomeIcon icon={faCircleMinus} /> :
        <FontAwesomeIcon icon={faCirclePlus} />

    return (
        <Card title={<div>{title}
            <div className="foldable-icon">{icon}</div>
        </div>} className={c}>
            {opened ? children : null}
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
