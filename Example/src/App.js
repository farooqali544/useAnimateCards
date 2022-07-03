import "./App.css";
import { DummyContent } from "./components/DummyContent";
import useAnimateCards from "./hooks/useAnimateCards";

const cards = [
  { name: "Card 1", description: "Card 1 Description" },
  { name: "Card 2", description: "Card 2 Description" },
  { name: "Card 3", description: "Card 3 Description" },
  { name: "Card 4", description: "Card 4 Description" },
];

const Card = ({ name, description, animate, }) => {
  return (
    <div className="card" id={animate?"animated-card":''}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

function App() {
  const [cardsContainerRef, shouldCardAnimate] = useAnimateCards( cards.length, 500, {animateOnce:false} );

  return (
    <div className="App">
      <DummyContent />

      <h1 style={{ fontSize: 40 }}>Cards</h1>

      <div className="cards-container" ref={cardsContainerRef}>
        {cards.map((card, index) => (
          <Card name={card.name} description={card.description} animate = {shouldCardAnimate(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
