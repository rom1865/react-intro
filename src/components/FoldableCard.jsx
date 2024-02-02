import React from "react";
import PropTypes from "prop-types";
import Card from "./Card.jsx";

// eslint-disable-next-line react/require-default-props
function FoldableCard(props) {
    // eslint-disable-next-line react/prop-types
    const { opened, title, children, className } = props;
    return (
        <Card title={title} className={opened ? "shown" : "foldable"}>
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
