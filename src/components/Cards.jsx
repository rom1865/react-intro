import React from "react";
import PropTypes from "prop-types";
import FoldableCard from "./FoldableCard.jsx";

function Cards({ children, cardsData }) {
  return (
    <div className="cards">
      {children}
      {cardsData.map((cardData) => (
        <FoldableCard key={cardData.id} title={cardData.title}>
          {cardData.content}
        </FoldableCard>
      ))}
    </div>
  );
}

Cards.propTypes = {
  cardsData: PropTypes.arrayOf(),
};

export default Cards;
