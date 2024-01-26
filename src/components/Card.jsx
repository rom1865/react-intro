import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/require-default-props
function Card(props) {
  const { title, children } = props;
  return (
    <article className="card">
      <header className="card__header header__title">{title}</header>
      <section className="card__main">{children}</section>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.node,
};

Card.defaultProps = {
  title: "title",
};

export default Card;
