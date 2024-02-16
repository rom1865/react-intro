import React, {useState} from "react";
import PropTypes from "prop-types";
import FoldableCard from "./FoldableCard.jsx";

function Cards({ children, cardsData }) {
  const [openedId, setOpenedID] = useState();

  const onToggleOpened = (id) => {
    setOpenedID(id)
  }

  return (
    <div className="cards">
      {children}
      {cardsData.map((cardData) => (
        <FoldableCard
            key={cardData.id}
            title={cardData.title}
            opened={cardData.id === openedId}
            onToggleOpened={() => {onToggleOpened(cardData.id)}}
        >
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
