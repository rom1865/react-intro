import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/require-default-props
function Card(props) {
  const { title } = props;
  return (
    <article className="card">
      <header className="card__header header__title">{title}</header>
      <section className="card__main">Content</section>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string,
};

Card.defaultProps = {
  title: "title",
};

export default Card;
