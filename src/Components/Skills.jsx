import React from "react";
import Card from "./Card";

const Main = () => {
  const cardsData = [
    { title: "Card 1", description: "This is the description for Card 1." },
    { title: "Card 2", description: "This is the description for Card 2." },
    { title: "Card 3", description: "This is the description for Card 3." },
  ];

  return (
<div>
<h1 className="text-center text-2xl font-bold text-red-700">Skills</h1>

      <main className=" h-max p-4 flex flex-wrap justify-center">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </main>
</div>

  );
};

export default Main;
