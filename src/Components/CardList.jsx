import React from "react";
import Card from "./Card";

const Main = () => {
  const cardsData = [
    { title: "Card 1", description: "This is the description for Card 1." },
    { title: "Card 2", description: "This is the description for Card 2." },
    { title: "Card 3", description: "This is the description for Card 3." },
    { title: "Card 4", description: "This is the description for Card 4." },
    { title: "Card 5", description: "This is the description for Card 4." },
    { title: "Card 6", description: "This is the description for Card 5." },
  ];

  return (
    <main className=" h-max p-4 flex flex-wrap justify-center bg-gray-100">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </main>
  );
};

export default Main;
