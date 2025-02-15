import Card2 from "./Card2";

const Links = () => {
    const cardsData = [
        { title: "Card 1", description: "Hello world" },
        { title: "Card 2", description: "Hello world" },
        { title: "Card 3", description: "Hello world" }
    ];

    return (
        <div>
            <main>
                {cardsData.map((card, index) => (
                    <Card2 key={index} title={card.title} description={card.description} />
                ))}
            </main>
        </div>
    );
}

export default Links;
