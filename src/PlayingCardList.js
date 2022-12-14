import React, { useState } from "react";import axios from "axios";
import useAxios from "./hooks/useAxios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

const CARDS_API_URL = "https://deckofcardsapi.com/api/deck/new/draw/"

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, setCards] = useAxios([]);

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => setCards(CARDS_API_URL)}> Add a playing card! </button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
