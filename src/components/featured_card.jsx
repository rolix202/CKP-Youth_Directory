import React from "react";
import "../assets/css/featured_card.css";
import { featured_info } from "../Data";
import FeaturedHead from "./featured_H";
import Card from "./card_feature";

function createCard(card) {
  return (
    <Card
      key={card.id}
      image={card.image}
      role={card.role}
      name={card.name}
      quote={card.quote}
    />
  )
}

function FeaturedCard() {
  return (
    <section>
      <div className="container mt-5">
        <FeaturedHead />
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          {featured_info.map((createCard))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCard;
